const createHttpError = require("http-errors");
const elasticClient = require("../config/elastic.config");

const createNewIndex = async (req, res, next) => {
  try {
    const { indexName } = req.body;

    if (!indexName) createHttpError.BadRequest("invalid value of index name!");

    const result = await elasticClient.indices.create({ index: indexName });

    return res.json({ result, message: "index created!" });
  } catch (error) {
    next(error);
  }
};

const removeIndex = async (req, res, next) => {
  try {
    const { indexName } = req.params;

    const indexExists = await elasticClient.indices.exists({
      index: indexName,
    });

    if (indexExists) elasticClient.indices.delete({ index: indexName });
    else createHttpError.NotFound("index not found!");

    res.json({ message: `index "${indexName}" deleted.` });
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
