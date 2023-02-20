//importando
const express = require('express');
require('dotenv').config();
const cors = require('Cors')
const conectarMongo = require('../config/mongo.Config')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.routesPath = '/api'
        this.middleware();
        this.routes();
        //this.MongoDB();
    }

    middleware() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.routesPath,require('../routes/users.route'))
        this.app.use(this.routesPath,require('../routes/products.route'))
        this.app.use(this.routesPath,require('../routes/mongo.route'))
        this.app.use(this.routesPath,require('../routes/alimentos.route'))
        this.app.use(this.routesPath,require('../routes/stacks.route'))
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