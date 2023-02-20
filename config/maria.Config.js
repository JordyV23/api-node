var mariaConfig = {
    host: process.env.MDB_HOST,
    user: process.env.MDB_USER,
    password: process.env.MDB_PASS,
    connectionLimit: 5,
    database: process.env.MDB_DB,
    port: process.env.MDB_PORT
};


module.exports = mariaConfig;