var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ususarioSchemaJSON = {
    nombre: String,
    autobus: Boolean
}

var usuarioSchema = new Schema(ususarioSchemaJSON)

var usuario = mongoose.model('Usuario', usuarioSchema)

module.exports = usuario