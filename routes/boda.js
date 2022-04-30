var express = require('express');
var mongoose = require("mongoose");
var router = express.Router();
var usuario = require("../schema/usuarios")


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/* GET Lista de usuarios. */
router.get('/list', async function (req, res, next) {
  try {
    const usuarios = await usuario.find()
    res.json(usuarios)
  } catch (err) {
    res.json({
      response: "Algo ha fallado al pedir la lista"
    })
  }
});

/* POST Crear usuario. */
router.post('/create', async function (req, res, next) {
  try {
    let usu = new usuario({
      nombre: req.body.nombre,
      email: req.body.email,
      asistencia: req.body.asistencia,
      acompañante: req.body.acompañante,
      autobus: req.body.autobus,
      alergias: req.body.alergias,
      datos: req.body.datos
    })
    await usu.save()
    res.json({
      response: "se ha creado con exito"
    })

  } catch (err) {
    res.json({
      response: "Algo ha fallado al crear"
    })
  }
});

/* POST Actualizar usuario. */
router.post('/update', async function (req, res, next) {
  console.log(req.body)
  try {
    await usuario.updateOne({
      _id: req.body._id
    }, {
      $set: {
        nombre: req.body.nombre,
        email: req.body.email,
        asistencia: req.body.asistencia,
        acompañante: req.body.acompañante,
        autobus: req.body.autobus,
        alergias: req.body.alergias,
        datos: req.body.datos
      }
    })

    res.json({
      response: "se ha actualizado con exito"
    })

  } catch (err) {
    res.json({
      response: "Algo ha fallado al actualizar"
    })
  }
});

/* POST Borrar usuario. */
router.post('/delete', async function (req, res, next) {
  try {
    await usuario.deleteOne({
      _id: req.body._id
    })
    res.json({
      response: "se ha borrado con exito"
    })

  } catch (err) {
    res.json({
      response: "Algo ha fallado al borrar"
    })
  }
});

module.exports = router;