const indiceRouter = require("express").Router();

const {
  createNewIndex,
  getIndices,
} = require("../controller/indice.contoller");

indiceRouter.post("/create", createNewIndex);
indiceRouter.get("/list", getIndices);

module.exports = indiceRouter;
