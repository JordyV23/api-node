const mongoose = require('mongoose');

function conetar() {
    const uri = process.env.MONGOURI
    mongoose.set("strictQuery", false);
    mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log('Base de datos MONGO conectada'))
        .catch(e => console.log(e));
}


module.exports = conetar