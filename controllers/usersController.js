const {
    response
} = require('express')

const getMethod = (req, res = response) => {
    res.json({
        "nombre": "Jordy",
        "mensaje": "Respuesta del controller method GET",
    })

}

const postMethod = (req, res = response) => {
    res.json({
        "nombre": "Jordy",
        "mensaje": "Respuesta del controller method POST",
    })
}


const deleteMethod = (req, res = response) => {
    res.json({
        "nombre": "Jordy",
        "mensaje": "Respuesta del controller method delete",
    })

}

module.exports = {
    getMethod,
    postMethod,
    deleteMethod,
}