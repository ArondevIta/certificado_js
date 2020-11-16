const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const certificates = await connection("certificates").select("*");

    return res.json({ certificates });
  },

  async show(req, res) {
    const { id } = req.params;

    const certificate = await connection("certificates")
      .where("id", id)
      .select("*")
      .first();

    if (!certificate) {
      return res.status(400).json({ error: "Certificate does not exists" });
    }

    return res.json(certificate);
  },

  async create(req, res) {
    const {
      institution,
      course,
      charge_horary,
      coordinate,
      date,
      student_id,
    } = req.body;

    const code = crypto.randomBytes(4).toString("HEX");

    const certificate = await connection("certificates").insert({
      institution,
      course,
      date,
      charge_horary,
      coordinate,
      student_id,
      code,
    });

    return res.json({ certificate });
  },

  async update(req, res) {
    const { id } = req.params;

    const {
      institution,
      course,
      charge_horary,
      coordinate,
      date,
      student_id,
    } = req.body;

    const certificate = await connection("certificates")
      .where("id", id)
      .select("*")
      .first();

    if (!certificate) {
      return res.status(400).json({ error: "Certificate does not exists" });
    }

    await connection("certificates")
      .update({
        institution,
        course,
        charge_horary,
        coordinate,
        date,
        student_id,
      })
      .where("id", id);

    const certificateUpdated = await connection("certificates")
      .where("id", id)
      .select("*")
      .first();

    return res.json({ certificateUpdated });
  },

  async destroy(req, res) {
    const { id } = req.params;

    const student = await connection("certificates")
      .where("id", id)
      .select("*")
      .first();

    if (!student) {
      return res.status(400).json({ error: "Certificate does not exists" });
    }

    await connection("certificates").delete().where("id", id);

    return res.status(200).send();
  },
};
