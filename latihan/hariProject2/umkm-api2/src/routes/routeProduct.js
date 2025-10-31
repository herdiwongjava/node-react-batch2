const express = require("express")
const routeProduct = express.Router()
const { handlerPostProduct, handlerGetProduct, handlerDeleteProduct, handlerUpdateProduct } = require("../controller/controllerProduct")



routeProduct.post("/products", handlerPostProduct)
routeProduct.get("/products", handlerGetProduct)
routeProduct.put("/products/:id", handlerUpdateProduct)
routeProduct.delete("/products/:id", handlerDeleteProduct)


module.exports = {
    routeProduct
}