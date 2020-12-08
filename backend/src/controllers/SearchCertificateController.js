const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { code } = req.query;
    let message = false;

    if (!code) {
      return res.json({ error: "code not provided" });
    }

    const certificates = await connection("certificates")
      .where("code", code)
      .select("*")
      .first();

    if (!certificates) {
      return res.json(message);
    }
    message = true;
    return res.json(message);
  },
};
