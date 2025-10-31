const express = require("express")
const { handlerPostCategory, handlerGetCategory } = require("../controller/controllerCategory")
const routeCategory = express.Router()


routeCategory.post("/category", handlerPostCategory)
routeCategory.get("/category", handlerGetCategory)


module.exports = {routeCategory}