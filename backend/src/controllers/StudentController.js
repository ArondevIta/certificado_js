const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const { user_id } = req.query;

    if (user_id) {
      const students = await connection("students")
        .where("user_id", user_id)
        .select("*");
      return res.json({ students });
    }
    const students = await connection("students").select("*");

    return res.json({ students });
  },

  async show(req, res) {
    const { id } = req.params;
    const student = await connection("students")
      .where("id", id)
      .select("*")
      .first();

    if (!student) {
      return res.status(400).json({ error: "Student not exists" });
    }

    return res.json({ student, id: req.userId });
  },

  async create(req, res) {
    const { name, city, uf, user_id } = req.body;
    const registration = crypto.randomBytes(3).toString("HEX");

    const student = await connection("students")
      .where("user_id", user_id)
      .select("*")
      .first();

    if (student) {
      return res.status(400).json({ error: "Student already exists" });
    }

    const user = await connection("users")
      .where("id", user_id)
      .select("*")
      .first();

    if (!user) {
      return res.status(400).json({ error: "User not exists" });
    }

    const newStudent = await connection("students").insert({
      name,
      registration,
      city,
      uf,
      user_id,
    });

    return res.json({ newStudent, id: req.userId });
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, city, uf } = req.body;

    const student = await connection("students")
      .where("id", id)
      .select("*")
      .first();

    if (!student) {
      return res.status(400).json({ error: "Student not exists" });
    }

    await connection("students")
      .update({
        name,
        city,
        uf,
      })
      .where("id", id);

    const studentUpdated = await connection("students")
      .where("id", id)
      .select("*")
      .first();

    return res.json({ studentUpdated, id: req.userId });
  },

  async destroy(req, res) {
    const { id } = req.params;

    const certificates = await connection("certificates")
      .where("student_id", id)
      .select("*");

    if (certificates) {
      await connection("certificates").delete().where("student_id", id);
    }

    const student = await connection("students")
      .where("id", id)
      .select("*")
      .first();

    if (!student) {
      return res.status(400).json({ error: "Student not exists" });
    }

    await connection("students").delete().where("id", id);

    return res.status(200).send();
  },
};
