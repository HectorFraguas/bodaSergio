var mongoose = require("mongoose");

const password = "bodasergio"
const dbName = "boda"

const connection = () => {
    mongoose.connect(`mongodb+srv://bodaSergioMonica:${password}@cluster0.8a9bw.mongodb.net/${dbName}?retryWrites=true&w=majority`)
    console.log("Conectado")

}

module.exports = connection