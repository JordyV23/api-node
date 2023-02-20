var dbsqlConfig = {
    user:process.env.MSQLS_USER,
    password:process.env.MSQLS_PASS,
    server: process.env.MSQLS_SERVER,
    database:process.env.MSQLS_DB,
    options: {
        trustServerCertificate:true,
    }
    
}; 

module.exports = dbsqlConfig;