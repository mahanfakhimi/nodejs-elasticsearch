const rootRouter = require("express").Router();

const indiceRouter = require("./indice.router");
const blogRouter = require("./blog.router");

rootRouter.use("/indice", indiceRouter);
rootRouter.use("/blog", blogRouter);

module.exports = rootRouter;
