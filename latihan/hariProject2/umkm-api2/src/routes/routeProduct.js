const express = require("express")
const routeProduct = express.Router()
const { handlerPostProduct, handlerGetProduct } = require("../controller/controllerProduct")



routeProduct.post("/products", handlerPostProduct)
routeProduct.get("/products", handlerGetProduct)


module.exports = {
    routeProduct
}