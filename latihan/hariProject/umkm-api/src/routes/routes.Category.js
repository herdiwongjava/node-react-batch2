const express = require("express")
const { handlerInsertCategory, handlerDeleteCategory, handlerGetCategory, handlerUpdateCategory } = require("../controller/controllerCategory")
const routerCategory = express.Router()

routerCategory.post("/category", handlerInsertCategory)
routerCategory.get("/category", handlerGetCategory)
routerCategory.put("/category/id", handlerUpdateCategory)
routerCategory.delete("/category/:id", handlerDeleteCategory)

module.exports = {routerCategory}