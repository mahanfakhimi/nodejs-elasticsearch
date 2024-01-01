const indiceRouter = require("express").Router();

const {
  createNewIndex,
  getIndices,
  removeIndex,
} = require("../controller/indice.contoller");

indiceRouter.post("/create", createNewIndex);
indiceRouter.get("/list", getIndices);
indiceRouter.delete("/remove/:indexName", removeIndex);

module.exports = indiceRouter;
