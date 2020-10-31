//Router
const { request } = require('express')
const express = require('express')
const router = express.Router()

//Validar
const Joi = require('joi')

function validateUsuario(usuario)
{
    const schema = Joi.object({
        nome: Joi.string().required()
    })

    return schema.validate(usuario)
}

//Modelo
const Usuario = require('../models/Usuario')

//GET ALL (read)
router.get('/', async (req, res) => {
    try
    {
        const usuario = await Usuario.find()
        res.json(usuario)
    }catch(err)
    {  
        res.json({ message: err.message })
    }
})

//GET ONE (read)
router.get('/:id', async (req, res) => {
    try
    {
        const usuario = await Usuario.findById(req.params.id)
        res.json(usuario)
    }catch(err)
    {
        res.json({ message: err.message})
    }
})

//POST (create)
router.post('/', async (req, res) => {
    const usuario = new Usuario({
        nome: req.body.nome,
        matricula: req.body.matricula,
        curso: req.body.curso,
        foto: req.body.foto,
        areaInteresse: req.body.areaInteresse,
        Projeto: req.body.Projeto,
        horas: req.body.horas
    })

    try
    {
        const savedUsuario = await usuario.save()
        res.json(savedUsuario)
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

//PATCH (update)
router.patch('/:id', async (req, res) => {
    try
    {
        res.send('Usuario patched')
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

//DELETE ALL (delete)
router.delete('/', async (req, res) => {
    try
    {
        res.send('All objects were removed!')
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

//DELETE ONE (delete)
router.delete('/:id', async (req, res) => {
    try
    {
        res.send('The objects was removed!')
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

module.exports = router