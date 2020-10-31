//Router
const { request } = require('express')
const express = require('express')
const router = express.Router()

//Validar
const Joi = require('joi')

function validateProjeto(projeto)
{
    const schema = Joi.object({
        nome: Joi.string().required()
    })

    return schema.validate(projeto)
}

//Modelo
const Projeto = require('../models/Projeto')

//GET ALL (read)
router.get('/', async (req, res) => {
    try
    {
        const projeto = await Projeto.find()
        res.json(projeto)
    }catch(err)
    {  
        res.json({ message: err.message })
    }
})

//GET ONE (read)
router.get('/:id', async (req, res) => {
    try
    {
        const projeto = await Projeto.findById(req.params.id)
        res.json(projeto)
    }catch(err)
    {
        res.json({ message: err.message})
    }
})

//POST (create)
router.post('/', async (req, res) => {
    const projeto = new Projeto({
        id: req.body.id,
        nome: req.body.nome,
        tipo: req.body.tipo,
        bolsa: req.body.bolsa,
        area: req.body.area,
        responsavel: req.body.responsavel,
        preRequisitos: req.body.preRequisitos,
        horas: req.body.horas,
        descricao: req.body.descricao,
        colaboradores: req.body.colaboradores
    })

    try
    {
        const savedProjeto = await projeto.save()
        res.json(savedProjeto)
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

//PATCH (update)
router.patch('/:id', async (req, res) => {
    try
    {
        res.send('Projeto patched')
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