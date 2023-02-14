//importando
const express = require('express');
require('dotenv').config();
const cors = require('Cors')
const conectarMongo = require('../config/mongoConfig')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.routesPath = '/api'
        this.middleware();
        this.routes();
        this.MongoDB();
    }

    middleware() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.routesPath,require('../routes/users'))
        this.app.use(this.routesPath,require('../routes/Products'))
        this.app.use(this.routesPath,require('../routes/mongoRoute'))
        this.app.use(this.routesPath,require('../routes/alimentos'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port: http://127.0.0.1:${this.port}/api`)
        })
    }

    MongoDB(){
        conectarMongo()
    }   

}

module.exports = Server