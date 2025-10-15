const express = require("express");
const { router } = require("./src/routes/routes");
const app = express();
const port = 3000;
app.use(express.json())



//root
app.get("/", (req, res) => {
  res.send("TUGAS REST API & MYSQL");
});


app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
