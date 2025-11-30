const express = require("express")
const router = express.Router()
const {
    listarContactos,
    formularioEdicion,
    crearContacto,
    editarContacto,
    borrarContacto
} = require("../controllers/contactos.controller")

// HOME
router.get("/", listarContactos)

// FORMULARIO DE EDICION
router.get("/editar/:id", formularioEdicion)

// CREAR NUEVO CONTATO
router.post("/contactos", crearContacto)

// EDITAR CONTACTO
// Verbo PUT gracias al middleware methodOverride
router.put("/contactos/:id", editarContacto)

// BORRAR CONTACTO
// Verbo DELETE gracias al middleware methodOverride
router.delete("/contactos/:id", borrarContacto)

module.exports = router
