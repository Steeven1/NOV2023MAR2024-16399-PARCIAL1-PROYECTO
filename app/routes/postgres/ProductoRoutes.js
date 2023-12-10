const express = require('express');
const postgresCtrl = require("../../controller/postgres/getters");
const router = express.Router();

//Rutas para el CRUD
//optener Todos
router.get('/', postgresCtrl.getProductos);


module.exports = router;