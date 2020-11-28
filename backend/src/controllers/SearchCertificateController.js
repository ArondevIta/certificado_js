const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { code } = req.query;

    if (!code) {
      return res.json({ error: "code not provided" });
    }

    const certificates = await connection("certificates")
      .where("code", code)
      .select("*")
      .first();

    if (!certificates) {
      return res.json({ error: "Certificate not valid" });
    }

    return res.json({ certificates });
  },
};
