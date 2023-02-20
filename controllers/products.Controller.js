const {
    response
} = require('express')

const productos = require('../dataModels/productos.model');

const getProducts = (req, res = response) => {

    productos.getProducts().then((data) => {
        res.json(data[0])
    });

}

const getById = (req, res = response) => {
    //!PARAMETROS
    const {id} = req.params //Path  (Obligatorios)
    // const {limit} = req.query //Query (Opcionales)
    productos.getProductsById(id).then((data) => {
        res.json(data[0])
    });

}

const putUser = (req, res = response) => {
    //!PARAMETROS
    const {id} = req.params //Path  (Obligatorios)
    const {sku,nombre,cantidad} = req.query //Query (Opcionales)
    productos.putProduct(id,sku,nombre,cantidad)
    res.send('Agregado')

}

module.exports = {
    getProducts,
    getById,
    putUser
}