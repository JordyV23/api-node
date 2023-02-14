const {
    response
} = require('express')

const productos = require('../dataModels/productos');

const getProducts = (req, res = response) => {

    productos.getProducts().then((data) => {
        res.json(data[0])
    });

}

module.exports = {
    getProducts,
}