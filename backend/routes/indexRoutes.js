const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// Rutas para obtener y registrar computadoras
router.get('/computadoras', indexController.getComputadoras);
router.post('/computadoras', indexController.registrarComputadora);

// Agrega rutas para obtener y registrar televisores, accesorios y usuarios si es necesario

module.exports = router;
