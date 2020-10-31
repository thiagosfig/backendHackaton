const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    matricula: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    areaInteresse: {
        type: [String],
        required: true
    },
    Projeto: {
        type: [{ id: Number, nome: String }]
    },
    horas: {
        type: Number,
        min: 0
    } 
})

module.exports = mongoose.model("Usuario", UsuarioSchema)