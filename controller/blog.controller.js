const createHttpError = require("http-errors");
const elasticClient = require("../config/elastic.config");

const getAllBlogs = async (req, res, next) => {
  try {
    const { query } = req.query;

    const indexExists = await elasticClient.indices.exists({
      index: "blog",
    });

    if (!indexExists) throw createHttpError.NotFound("index not found!");

    const result = await elasticClient.search({ index: "blog", q: query });

    return res.json({ blogs: result.hits.hits });
  } catch (error) {
    next(error);
  }
};

const createNewBlog = async (req, res, next) => {
  try {
    const blogData = req.body;

    if (!Object.keys(blogData).length)
      throw createHttpError.BadRequest("blog content is required!");

    const createdResult = await elasticClient.index({
      index: "blog",
      document: blogData,
    });

    return res.json({ createdResult });
  } catch (error) {
    next(error);
  }
};

const removeBlog = async (req, res, next) => {
  try {
    const { id } = req.params;

    const indexExists = await elasticClient.indices.exists({
      index: "blog",
    });

    if (!indexExists) throw createHttpError.NotFound("index not found!");

    const result = await elasticClient.deleteByQuery({
      index: "blog",

      query: {
        match: {
          _id: id,
        },
      },
    });

    if (!result.total) throw createHttpError.NotFound("blog not found");

    return res.json({ message: "blog deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateBlogData = req.body;

    const blog = await elasticClient.search({
      index: "blog",
      query: { match: { _id: id } },
    });

    if (!blog.hits.total.value)
      throw createHttpError.NotFound("blog not found!");

    const result = await elasticClient.update({
      index: "blog",
      id,
      doc: updateBlogData,
    });

    return res.json({ result, message: "blog updated successfully" });
  } catch (error) {
    next(error);
  }
};

const searchByTitle = async (req, res, next) => {
  try {
    const { title } = req.params;

    const result = await elasticClient.search({
      index: "blog",
      query: { match: { title } },
    });

    return res.json({ blogs: result });
  } catch (error) {
    next(error);
  }
};

const searchByMultiField = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const searchByRegex = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBlogs,
  createNewBlog,
  removeBlog,
  updateBlog,
  searchByTitle,
  searchByMultiField,
  searchByRegex,
};
