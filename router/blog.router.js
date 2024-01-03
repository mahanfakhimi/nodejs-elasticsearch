const blogRouter = require("express").Router();

const {
  createNewBlog,
  getAllBlogs,
  removeBlog,
  updateBlog,
} = require("../controller/blog.controller");

blogRouter.post("/create", createNewBlog);
blogRouter.get("/list", getAllBlogs);
blogRouter.delete("/remove/:id", removeBlog);
blogRouter.put("/update/:id", updateBlog);

module.exports = blogRouter;
