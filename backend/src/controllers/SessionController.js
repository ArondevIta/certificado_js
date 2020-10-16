const connection = require("../database/connection");

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

    if (user.email !== email || user.password !== password) {
      return res.status(401).json({ error: "User or password invalid!" });
    }

    return res.json({ ok: "User logged!" });
  },
};
