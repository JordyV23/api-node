const dbsqlConfig = require("../config/dbsql.Config")
const sql = require('mssql')


async function getProducts() {
    try {
        let pool = await sql.connect(dbsqlConfig);
        let data = await pool.request().query("select * from Productos");
        return data.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function getProductsById(id) {
    try {
        let pool = await sql.connect(dbsqlConfig);
        let data = await pool.request().query(`select * from Productos where id=${id}`);
        return data.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function putProduct(id, SKU, nombre, cantidad) {
    // console.log(`INSERT INTO Productos values ('${SKU}','${nombre}','${cantidad}')  WHERE Id=${id}`)
    // return
    try {
        let pool = await sql.connect(dbsqlConfig);
        let data = await pool.request().query(`INSERT INTO Productos values ('${SKU}','${nombre}','${cantidad}')  where Id=${id}`);
        return data.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProductsById,
    putProduct
}