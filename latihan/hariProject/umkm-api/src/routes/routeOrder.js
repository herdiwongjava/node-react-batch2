const express = require("express");
const routerOrder = express.Router();
const { handlerCheckout } = require("../controller/controllerOrder");



routerOrder.post("/checkout",handlerCheckout)

module.exports = {routerOrder}