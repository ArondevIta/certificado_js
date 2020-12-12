const connection = require("../database/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");

module.exports = {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await connection("users")
      .where("email", email)
      .select("*")
      .first();

    if (!user.is_admin) {
      return res.status(401).json({ error: "User does not admin" });
    }

    if (!user) {
      return res.status(400).json({ error: "User does not exists!" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: "Password Invalid!" });
    }

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400,
    });

    return res.json({ id: user.id, token });
  },
};
