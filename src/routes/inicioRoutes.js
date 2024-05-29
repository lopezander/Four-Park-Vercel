
const express = require('express');
const router = express.Router();
const inicioController = require('../controllers/inicioController');

router.post('/inicio/Create', inicioController.createUser);
router.get('/inicio/FindAll', inicioController.getUsers);
router.get('/inicio/FindOne', inicioController.getUser);
router.put('/inicio/Upadate', inicioController.updateUser);
router.delete('/inicio/delete', inicioController.deleteUser);

module.exports = router;