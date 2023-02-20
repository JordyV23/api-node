const consulta = async (db,config, consulta) => {
    try {
        let pool = db.createPool(config);
        let data = await pool.query(consulta);
        return data
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    consulta
}