const mysqlConfig = require("../config/mysqlConfig")
const mysql = require('mysql2/promise');
const {
    response
} = require("express");

const getAlimentos = async () => {
    try {
        let pool = mysql.createPool(mysqlConfig);
        let data = await pool.query('SELECT * from tbfrutas');
        return data[0]
    } catch (error) {
        console.log(error);
    }
}

const postAlimentos = async (req, res = response) => {
    try {
        const {fruta} = req.body
        let pool = mysql.createPool(mysqlConfig);
        await pool.query('INSERT INTO tbfrutas (Nombre) values (?)', fruta);
        res.send('Agregado')
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getAlimentos,
    postAlimentos
}