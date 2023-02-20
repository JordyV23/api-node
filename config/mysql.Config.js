
var mysqlConfig = {
    host: process.env.MYSQLHOST,
    user:process.env.MYSQLUSER ,
    password:process.env.MYSQLPASS,
    database:process.env.MYSQLDB
};

module.exports = mysqlConfig