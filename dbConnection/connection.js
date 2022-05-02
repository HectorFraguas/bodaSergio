var mongoose = require("mongoose");




const connection = () => {
    mongoose.connect(`mongodb+srv://bodaSergioMonica:${process.env.password || "bodasergio"}@cluster0.8a9bw.mongodb.net/${process.env.dbName || "boda"}?retryWrites=true&w=majority`)
    console.log("Conectado")

}

module.exports = connection