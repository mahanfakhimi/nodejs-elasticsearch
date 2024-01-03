const elasticClient = require("../config/elastic.config");

const getAllBlogs = async (req, res, next) => {
  try {
    const { query } = req.query;

    const result = await elasticClient.search({ index: "blog", q: query });

    return res.json({ blogs: result.hits.hits.map((blog) => blog._source) });
  } catch (error) {
    next(error);
  }
};

const createNewBlog = async (req, res, next) => {
  try {
    const blogData = req.body;

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
