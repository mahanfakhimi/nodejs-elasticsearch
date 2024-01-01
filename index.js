const express = require("express");
const dotenv = require("dotenv");
const router = require("./router");

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, _req, res, _next) =>
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message,
  })
);

app.use((_req, res, _next) =>
  res.status(404).json({ status: 404, message: "not found" })
);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT ${PORT}`));
