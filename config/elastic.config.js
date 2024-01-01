const { Client } = require("@elastic/elasticsearch");

const { ELASTIC_HOST, ELASTIC_USER_NAME, ELASTIC_PASSWORD } = process.env;

const elasticClient = new Client({
  node: ELASTIC_HOST,

  auth: {
    username: ELASTIC_USER_NAME,
    password: ELASTIC_PASSWORD,
  },
});

module.exports = elasticClient;
