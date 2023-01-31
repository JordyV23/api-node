//importando
const express = require('express');
require('dotenv').config();
const cors = require('Cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.routesPath = '/api'
        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(express.static('public'));
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.routesPath,require('../routes/users'))
        this.app.use(this.routesPath,require('../routes/Products'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port: http://127.0.0.1:${this.port}/api`)
        })
    }

}

module.exports = Server