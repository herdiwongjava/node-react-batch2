const express = require("express")
const cors = require("cors")
require("dotenv").config()
const { routeProduct } = require("./src/routes/routeProduct")
const { routeCategory } = require("./src/routes/routeCategory")



const app = express()
const port = 3000
app.use(express.json());

//CORS
const corsOptions = {
    origin: process.env.CORS_ALLOW_LIST.split(","), optionsSuccessStatus: 200}
app.use(cors(corsOptions))


app.get("/", (req, res) => {
    res.send("Login API")
})
app.use("/api", routeProduct)
app.use("/api", routeCategory)



app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`);
    
})