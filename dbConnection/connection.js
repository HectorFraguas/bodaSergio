var mongoose = require("mongoose");

const connection = () => {
    mongoose.connect(`mongodb+srv://bodaSergioMonica:${process.env.password}@cluster0.8a9bw.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`)
    console.log("Conectado")

}

module.exports = connection