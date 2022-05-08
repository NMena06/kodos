const express = require("express");


const router = express.Router();

const ProductController = require("../controllers/ProductsController");

router.get("/createProduct", ProductController.createProduct);
router.post("/saveProduct", ProductController.saveProduct);
router.get('/editProduct/:id', ProductController.editProduct);
module.exports = router;
