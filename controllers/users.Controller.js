const {
    response
} = require('express')

const getMethod = (req, res = response) => {

    //!PARAMETROS
    // const {id} = req.params //Path  (Obligatorios)
    // const {limit} = req.query //Query (Opcionales)


    res.json({
        "nombre": "Jordy",
        "mensaje": "Respuesta del controller method GET",
        // "params":id,
        // "path":limit
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