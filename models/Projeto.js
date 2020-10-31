const mongoose = require('mongoose')

const ProjetoSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    bolsa: {
        type: Number,
        min: 0,
        default: 0
    },
    area: {
        type: [String],
        required: true
    },
    responsavel: {
        type: String,
        required: true
    },
    preRequisitos: {
        type: [String]
    },
    horas: {
        type: Number,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    colaboradores: {
        type: [{
            nome: String,
            matricula: String
        }]
    }
})

module.exports = mongoose.model("Projeto", ProjetoSchema)