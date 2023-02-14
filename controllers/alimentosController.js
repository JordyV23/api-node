const {
    response
} = require('express')

const alimentos = require('../dataModels/alimentos');

const getAlimentos = (req, res = response) => {
    alimentos.getAlimentos().then((data) => {
        res.json(data)
    });
}

const postAlimentos = (req,res = response) => {
    alimentos.postAlimentos(req,res)
}

module.exports = {
    getAlimentos,
    postAlimentos
}