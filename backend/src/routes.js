const express = require("express");

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const StudentController = require("./controllers/StudentController");

const routes = express.Router();

routes.post("/register", UserController.create);
routes.post("/login", SessionController.create);

routes.get("/students", StudentController.index);
routes.get("/students/:id", StudentController.show);
routes.post("/students", StudentController.create);
routes.put("/students/:id", StudentController.update);
routes.delete("/students/:id", StudentController.destroy);

module.exports = routes;
