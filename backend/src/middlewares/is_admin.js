const connection = require("../database/connection");

module.exports = async (req, res, next) => {
  const id_user = req.userId;
  const user = await connection("users")
    .where("id", id_user)
    .select("*")
    .first();

  if (!user.is_admin) {
    return res.json({ error: "You do not have permission to access" });
  }
  return next();
};
