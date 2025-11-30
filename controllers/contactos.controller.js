const {
    leerContactos,
    agregarContacto,
    obtenerContactoPorId,
    actualizarContacto,
    eliminarContacto
} = require("../models/contactos.model")

// LISTAR CONTACTOS
const listarContactos = async (req, res) => {
    try {
        const contactos = await leerContactos()
        res.render("home", { contactos, title: "Gestión de Contactos" })
    } catch (error) {
        res.status(500).render("error", { mensaje: "Error al cargar los contactos", title: "Error" })
    }
}

// FORMULARIO DE EDICION
const formularioEdicion = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const contacto = await obtenerContactoPorId(id)

        if (!contacto) {
            return res.status(404).render("error", { mensaje: "Contacto no encontrado", title: "Error" })
        }

        res.render("editar", { contacto, title: "Editar Contacto" })
    } catch (error) {
        res.status(500).render("error", { mensaje: "Error al cargar el contacto", title: "Error" })
    }
}

// CREAR NUEVO CONTATO
const crearContacto = async (req, res) => {
    try {
        const { nombre, telefono, email } = req.body
        await agregarContacto({ nombre, telefono, email })
        res.redirect("/")
    } catch (error) {
        res.status(500).render("error", { mensaje: "Error al agregar el contacto", title: "Error" })
    }
}

// EDITAR CONTACTO
const editarContacto = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { nombre, telefono, email } = req.body
        await actualizarContacto(id, { nombre, telefono, email })
        res.redirect("/")
    } catch (error) {
        res.status(500).render("error", { mensaje: "Error al actualizar el contacto", title: "Error" })
    }
}

// BORRAR CONTACTO
const borrarContacto = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        await eliminarContacto(id)
        res.redirect("/")
    } catch (error) {
        res.status(500).render("error", { mensaje: "Error al eliminar el contacto", title: "Error" })
    }
}

module.exports = {
    listarContactos,
    formularioEdicion,
    crearContacto,
    editarContacto,
    borrarContacto
}
