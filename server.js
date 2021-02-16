const express = require("express");
const helmet = require("helmet");
const ingredentsRouter = require("./ingredients/ingredients-router");
const recipiesRouter = require("./recipes/recipes-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/ingredients", ingredentsRouter);
server.use("/api/recipes", recipiesRouter);

module.exports = server;
