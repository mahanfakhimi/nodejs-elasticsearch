const blogRouter = require("express").Router();

const { createNewBlog } = require("../controller/blog.controller");

blogRouter.post("/create", createNewBlog);

module.exports = blogRouter;
