var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ususarioSchemaJSON = {
    nombre: String,
    email: String,
    asistencia: Boolean,
    acompañante: String,
    autobus: Boolean,
    alergias: String,
    datos: String
}

var usuarioSchema = new Schema(ususarioSchemaJSON)

var usuario = mongoose.model('Usuario', usuarioSchema)

module.exports = usuario