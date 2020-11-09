const connection = require("../database/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");

module.exports = {
  async create(req, res) {
    const { email, password, is_admin } = req.body;

    const user = await connection("users")
      .where("email", email)
      .select("*")
      .returning("id")
      .first();

    if (user) {
      return res.status(400).json({ error: "User exists" });
    }
    const hash = await bcrypt.hash(password, 10);

    const newUser = await connection("users").insert({
      email,
      password: hash,
      is_admin,
    });

    const token = jwt.sign({ id: newUser.id }, authConfig.secret, {
      expiresIn: 86400,
    });

    return res.json({ id: newUser, token });
  },
};
