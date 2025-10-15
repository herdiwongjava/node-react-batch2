const express = require("express");
const router = express.Router()
const { 
    handleInsertData, 
    handelSelectData, 
    handleSelectDataById, 
    handleSelectByGrade, 
    handleSelectByNilai, 
    handleUpdateData, 
    handleDeleteData} = require("../handler/handler");


router.post("/add", handleInsertData);
router.get("/view", handelSelectData);
router.get("/view/:id", handleSelectDataById);
router.get("/grade/:grade", handleSelectByGrade);
router.get("/nilai/:nilai", handleSelectByNilai);
router.put("/change/:id", handleUpdateData);
router.delete("/remove/:id", handleDeleteData);

module.exports = {router}