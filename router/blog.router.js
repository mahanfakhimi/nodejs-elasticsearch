const blogRouter = require("express").Router();

const { createNewBlog, getAllBlogs } = require("../controller/blog.controller");

blogRouter.post("/create", createNewBlog);
blogRouter.get("/list", getAllBlogs);

module.exports = blogRouter;
