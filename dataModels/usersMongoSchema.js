const {
    Schema,
    model
} = require('mongoose')


const users = new Schema({
    username: {
        type: String,
        require: [true, 'El campo username es requerido']
    },
    password: {
        type: String,
        require: [true, 'El campo password es requerido']
    },
}, {
    versionKey: false
})

//Crear Modelo
module.exports = model('users', users);;