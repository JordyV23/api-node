//importando la clase
const Server = require("./models/server");
const mongo = require("./config/mongoConfig")

//creando objeto
const server = new Server();
server.listen()