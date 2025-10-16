const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { router } = require("./src/routes/routes");
const app = express();
const port = 3000;

var corsOptions = {
    origin: process.env.CORS_ALLOW_LIST.split(","),
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Belajar CORS & PRISMA");
});

app.use("/api", router)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
