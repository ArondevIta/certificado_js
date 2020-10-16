const express = require("express");

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/register", UserController.create);
routes.post("/login", SessionController.create);

module.exports = routes;
