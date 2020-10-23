const express = require("express");

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const StudentController = require("./controllers/StudentController");
const CertificateController = require("./controllers/CertificateController");

const routes = express.Router();

routes.post("/register", UserController.create);
routes.post("/login", SessionController.create);

routes.get("/students", StudentController.index);
routes.get("/students/:id", StudentController.show);
routes.post("/students", StudentController.create);
routes.put("/students/:id", StudentController.update);
routes.delete("/students/:id", StudentController.destroy);

routes.get("/certificates", CertificateController.index);
routes.get("/certificates/:id", CertificateController.show);
routes.post("/certificates", CertificateController.create);
routes.put("/certificates/:id", CertificateController.update);
routes.delete("/certificates/:id", CertificateController.destroy);

module.exports = routes;
