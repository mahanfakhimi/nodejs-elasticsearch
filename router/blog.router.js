const blogRouter = require("express").Router();

const {
  createNewBlog,
  getAllBlogs,
  removeBlog,
} = require("../controller/blog.controller");

blogRouter.post("/create", createNewBlog);
blogRouter.get("/list", getAllBlogs);
blogRouter.delete("/remove/:id", removeBlog);
blogRouter.put("/update/:id", removeBlog);

module.exports = blogRouter;
