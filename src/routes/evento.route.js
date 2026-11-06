const express = require('express');
const router = express.Router();

const eventoCtrl = require('../controllers/evento.controller');

router.get('/todos', eventoCtrl.getAll);
router.get('/uno/:id', eventoCtrl.getOne);
router.post('/nuevo', eventoCtrl.create);
router.put('/actualizar/:id', eventoCtrl.actualizar);
router.delete('/borrar/:id', eventoCtrl.delete);
router.get('/buscar/:nombre', eventoCtrl.findByName);

module.exports = router;