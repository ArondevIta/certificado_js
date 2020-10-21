const connection = require("../database/connection");
const crypto = require("crypto");
const { update } = require("../database/connection");

module.exports = {
  async index(req, res) {
    const students = await connection("students").select("*");

    return res.json(students);
  },

  async show(req, res) {
    const { id } = req.params;
    const student = await connection("students")
      .where("id", id)
      .select("*")
      .first();
    console.log(student);

    if (!student) {
      return res.status(400).json({ error: "Student not exists" });
    }

    return res.json(student);
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

    const newStudent = await connection("students").insert({
      name,
      registration,
      city,
      uf,
      user_id,
    });

    return res.json({ newStudent });
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

    return res.json(studentUpdated);
  },

  async destroy(req, res) {
    const { id } = req.params;

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
