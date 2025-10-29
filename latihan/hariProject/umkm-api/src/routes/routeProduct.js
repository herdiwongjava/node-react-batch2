const express = require("express");
const routerProduct = express.Router();
const { handlerInsertProduct, handlerGetProduct, handlerGetProductId, handlerUpdateProduct, handlerDeleteProduct } = require("../controller/controllerProduct");

routerProduct.post("/products",handlerInsertProduct)
routerProduct.get("/products",handlerGetProduct)
routerProduct.get("/products/:id",handlerGetProductId)
routerProduct.put("/products/:id",handlerUpdateProduct)
routerProduct.delete("/products/:id",handlerDeleteProduct)

module.exports = {routerProduct}