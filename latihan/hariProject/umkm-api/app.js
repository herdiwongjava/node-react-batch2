const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { routerProduct } = require("./src/routes/routeProduct");
const { routerCategory } = require("./src/routes/routes.Category");
const { routerOrder } = require("./src/routes/routeOrder");



const app = express();
const port = 3000;
app.use(express.json());


//CORS Setting
var corsOptions = {origin: process.env.CORS_ALLOW_LIST.split(","), optionsSuccessStatus: 200}
app.use(cors(corsOptions));




app.get('/', (req, res) => {
    res.send('UMKM App')
})


app.use("/api", routerProduct)
app.use("/api", routerCategory)
app.use("/api", routerOrder)

app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`);
})

