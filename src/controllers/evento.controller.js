const EventoModel = require('../models/evento.model');
const eventoCtrl = {};

eventoCtrl.getAll = async (req, res) => {
    await EventoModel.find()
        .then(data => {
            res.status(200).json({
                status: true,
                message: 'Aquí tienes tu lista',
                eventos: data
            })
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

eventoCtrl.getOne = async (req, res) => {
    await EventoModel.findById(req.params.id)
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    message: 'Aquí tienes tu lista',
                    eventos: data
                })
            }else {
                res.status(404).json({
                    status: false,
                    message: 'Evento No encontrado'
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

eventoCtrl.create = async (req, res) => {
    const nuevoEvento = new EventoModel(req.body);
    await nuevoEvento.save()
        .then(data => {
                res.status(201).json({
                    status: true,
                    message: 'Evento creado',
                    data
                })

        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}


eventoCtrl.actualizar = async (req, res) => {
    await EventoModel.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new: true}
    )
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    message: 'Evento actualizado',
                    evento: data
                })
            }else {
                res.status(404).json({
                    status: false,
                    message: 'Evento No encontrado'
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}


eventoCtrl.delete = async (req, res) => {
    await EventoModel.findByIdAndDelete(
        req.params.id
    )
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    message: 'Evento borrado',
                    evento: data
                })
            }else {
                res.status(404).json({
                    status: false,
                    message: 'Evento No encontrado'
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}


eventoCtrl.findByName = async (req, res) => {
    const regex = new RegExp(req.params.nombre, 'i');
    await EventoModel.find(
        {nombre: {$regex: req.params.nombre, $options: 'i'}}
    )
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    message: 'Evento buscado: '+req.nombre,
                    evento: data
                })
            }else {
                res.status(404).json({
                    status: false,
                    message: 'Evento No encontrado'
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}



module.exports = eventoCtrl;