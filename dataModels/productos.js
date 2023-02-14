const dbsqlConfig = require("../config/dbsqlConfig")
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

module.exports = {
    getProducts
}