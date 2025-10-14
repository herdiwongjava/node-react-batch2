const express = require("express");
const { router } = require("./src/routes/main");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API - Movie");
});

app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
