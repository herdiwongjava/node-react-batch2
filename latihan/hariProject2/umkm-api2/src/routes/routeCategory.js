const express = require("express")
const { handlerPostCategory } = require("../controller/controllerCategory")
const routeCategory = express.Router()


routeCategory.post("/category", handlerPostCategory)


module.exports = {routeCategory}