const mongoose = require('mongoose');
const {Schema} = mongoose;

const eventoSchema = new Schema({
    nombre: {type: String, required: true},
    fecha: {type: Date, required: true},
    lugar: {type: String, required: true},
    descripcion: {type: String, required: true},
},{timestamps: true, versionKey: false});

module.exports = mongoose.model('Evento', eventoSchema,'Eventos');
