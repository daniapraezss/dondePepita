const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');

//GET, POST, PUT,  DELETE
// http://Localhost:3001/api/role/registerRole
router.post("/registerProduct", ProductController.registerProduct);
// http://Localhost:3001/api/role/listRole

router.get("/listProduct", ProductController.listProducts);

module.exports = router;