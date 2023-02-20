const {
    response
} = require('express')

const alimentos = require('../dataModels/alimentos.model');

const getAlimentos = (req, res = response) => {
    alimentos.getAlimentos().then((data) => {
        res.json(data[0])
    });
}

const postAlimentos = (req,res = response) => {
    alimentos.postAlimentos(req,res)
}

const deleteAlimentos = (req,res = response) => {
    alimentos.deleteAlimentos(req,res)
}

const putAlimentos = (req,res = response) => {
    alimentos.putAlimentos(req,res)
}

module.exports = {
    getAlimentos,
    postAlimentos,
    deleteAlimentos,
    putAlimentos
}