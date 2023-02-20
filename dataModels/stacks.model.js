const mariadb = require('mariadb');
const mariaConfig = require('../config/maria.Config')
const {
    response
} = require("express");
const {
    consulta
} = require('../generator/ConsultasSQL')

const getStacks = async () => {
    return consulta(mariadb, mariaConfig, 'SELECT * FROM tbfrontend')
}


const postStacks = async (req, res = response) => {
    try {
        const { nombre } = req.body
        consulta(mariadb, mariaConfig, `INSERT INTO tbfrontend (Nombre) values ('${nombre}')'`).then(res.send("Agregado con exito"))
    } catch (error) {
        console.log(error);
    }
}

const deleteStacks = async (req, res = response) => {
    try {
        const { id } = req.body
        let pool = mariadb.createPool(mariaConfig);
        await pool.query('DELETE FROM tbfrontend WHERE Id=?', id);
        res.send("Eliminado con exito")
    } catch (error) {
        console.log(error);
    }
}

const updateStacks = async (req, res = response) => {
    try {
        const {
            nombre,
            id
        } = req.body
        let pool = mariadb.createPool(mariaConfig);
        await pool.query(`UPDATE tbfrontend SET Nombre='${nombre}' WHERE Id=${id}`);
        res.send("Actualizado con exito")
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getStacks,
    postStacks,
    deleteStacks,
    updateStacks
}