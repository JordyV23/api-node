const {
    response
} = require('express')

const usuariosMongo = require('../dataModels/usersMongoSchema')

const getMongo = async (req, res = response) => {

    try {
        const array = await usuariosMongo.find();
        console.log(array)
        res.json(array)
    } catch (err) {
        console.log(err)
    }

}

const postMongo = async (req, res = response) => {
    try {
 
        const {username,password} = req.body

        const user = new usuariosMongo({username,password}) 

        user.save();
        res.send('Usuario Agregado')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getMongo, postMongo
}