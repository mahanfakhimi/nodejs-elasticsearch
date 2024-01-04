const blogRouter = require("express").Router();

const {
  createNewBlog,
  getAllBlogs,
  removeBlog,
  updateBlog,
  searchByTitle,
  searchByMultiField,
  searchByRegex,
} = require("../controller/blog.controller");

blogRouter.post("/create", createNewBlog);
blogRouter.get("/list", getAllBlogs);
blogRouter.delete("/remove/:id", removeBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/find-by-title/:title", searchByTitle);
blogRouter.get("/multi-field", searchByMultiField);
blogRouter.get("/regex", searchByRegex);

module.exports = blogRouter;
