const createHttpError = require("http-errors");
const elasticClient = require("../config/elastic.config");

const getAllBlogs = async (req, res, next) => {
  try {
    const { query } = req.query;

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

const searchByTitle = async (req, res, next) => {
  try {
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
  searchByTitle,
  searchByMultiField,
  searchByRegex,
};
