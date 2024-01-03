const indiceRouter = require("express").Router();

const {
  createNewIndex,
  getIndices,
  deleteIndex,
} = require("../controller/indice.contoller");

indiceRouter.post("/create", createNewIndex);
indiceRouter.get("/list", getIndices);
indiceRouter.delete("/delete/:indexName", deleteIndex);

module.exports = indiceRouter;
