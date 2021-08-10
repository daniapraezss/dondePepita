const express = require('express');
const router = express.Router();
const StoreController = require('../controllers/store');

//GET, POST, PUT,  DELETE
// http://Localhost:3001/api/role/registerRole
router.post("/registerStore", StoreController.registerStore);
// http://Localhost:3001/api/role/listRole

router.get("/listProduct", StoreController.listStore);

module.exports = router;