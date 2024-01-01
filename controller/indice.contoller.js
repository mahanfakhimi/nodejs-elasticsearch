const createHttpError = require("http-errors");
const elasticClient = require("../config/elastic.config");

const createNewIndex = async (req, res, next) => {
  try {
    const { indexName } = req.body;

    if (!indexName) createHttpError.BadRequest("invalid value of index name");

    const result = await elasticClient.indices.create({ index: indexName });

    return res.json({ result, message: "index created!" });
  } catch (error) {
    next(error);
  }
};

const removeIndex = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const getIndices = async (req, res, next) => {
  try {
    const indices = (await elasticClient.cat.indices({ format: "json" })).map(
      (indiec) => indiec.index
    );

    return res.json({ indices });
  } catch (error) {
    next(error);
  }
};

module.exports = { createNewIndex, removeIndex, getIndices };
