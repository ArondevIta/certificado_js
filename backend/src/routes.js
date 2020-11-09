const express = require("express");

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const StudentController = require("./controllers/StudentController");
const CertificateController = require("./controllers/CertificateController");

const auth = require("./middlewares/auth");
const is_admin = require("./middlewares/is_admin");

const routes = express.Router();

routes.use("/certificates", auth);

routes.post("/register", UserController.create);
routes.post("/login", SessionController.create);

routes.get("/students", StudentController.index, auth, is_admin);
routes.get("/students/:id", StudentController.show, auth, is_admin);
routes.post("/students", StudentController.create);
routes.put("/students/:id", StudentController.update, auth);
routes.delete("/students/:id", StudentController.destroy, auth, is_admin);

routes.get("/certificates", CertificateController.index);
routes.get("/certificates/:id", CertificateController.show);
routes.post("/certificates", CertificateController.create, is_admin);
routes.put("/certificates/:id", CertificateController.update, is_admin);
routes.delete("/certificates/:id", CertificateController.destroy, is_admin);

module.exports = routes;
