const connection = require("../database/connection");
const bcrypt = require("bcryptjs");

module.exports = {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await connection("users")
      .where("email", email)
      .select("*")
      .first();

    if (!user) {
      return res.status(400).json({ error: "User does not exists!" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: "Password Invalid!" });
    }

    return res.json({ ok: "User logged!" });
  },
};
