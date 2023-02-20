const mysqlConfig = require("../config/mysql.Config")
const mysql = require('mysql2/promise');
const {
    response
} = require("express");
const {
    consulta
} = require('../generator/ConsultasSQL')

const getAlimentos = async () => {
    return consulta(mysql, mysqlConfig, 'SELECT * FROM tbfrutas')
}

const postAlimentos = async (req, res = response) => {
    try {
        const { fruta } = req.body
        consulta(mysql, mysqlConfig, `INSERT INTO tbfrutas (Nombre) values ('${fruta}')`).then(res.send('Agregado'))
    } catch (e) {
        console.log(e)
    }
}

const deleteAlimentos = async (req, res = response) => {
    try {
        const {id} = req.body
        consulta(mysql,mysqlConfig,`DELETE FROM tbfrutas WHERE Idfruta=${id}`).then(res.send('Eliminado'))
    } catch (e) {
        console.log(e)
    }
}

const putAlimentos = async (req, res = response) => {
    try {
        const {id,nombre} = req.body
        consulta(mysql,mysqlConfig,`UPDATE tbfrutas SET Nombre='${nombre}' WHERE Idfruta=${id}`).then(res.send('Actualizado'))
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getAlimentos,
    postAlimentos,
    deleteAlimentos,
    putAlimentos
}