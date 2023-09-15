const express = require('express');
const { getAllProdet, createProduct, updateProduct, deleteProduct, getProductdetails } = require('../ontrolr/ProsectControlre');
const routre = express.Router();

// routre.route("/products").get(getAllProdet)
routre.route("/proudet").get(getAllProdet)
routre.route("/proudet/new").post(createProduct)
routre.route("/proudet/:id").put(updateProduct).delete(deleteProduct).get(getProductdetails) 

module.exports = routre;
