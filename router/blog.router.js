const blogRouter = require("express").Router();

const {
  createNewBlog,
  getAllBlogs,
  removeBlog,
  updateBlog,
  searchByTitle,
} = require("../controller/blog.controller");

blogRouter.post("/create", createNewBlog);
blogRouter.get("/list", getAllBlogs);
blogRouter.delete("/remove/:id", removeBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/find-by-title/:title", searchByTitle);

module.exports = blogRouter;
