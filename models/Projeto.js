const mongoose = require('mongoose')

const ProjetoSchema = mongoose.Schema({
    id: {
        type: String,
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
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    responsavel: {
        type: String,
        required: true
    },
    preRequisitos: {
        type: String,
        required: true
    },
    horas: {
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    colaboradores: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Projeto", ProjetoSchema)