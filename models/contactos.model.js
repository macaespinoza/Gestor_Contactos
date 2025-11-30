const fs = require("fs/promises")
const path = require("path")

const archivo = path.join(__dirname, "..", "data", "contactos.txt")

// LEER CONTACTOS
const leerContactos = async () => {
    try {
        const contenido = await fs.readFile(archivo, "utf-8")
        if (!contenido.trim()) return []

        return contenido.trim().split("\n").map(linea => {
            const [id, nombre, telefono, email] = linea.split("|")
            return { id: parseInt(id), nombre, telefono, email }
        })
    } catch (error) {
        return []
    }
}

// ESCRIBIR CONTACTOS
const escribirContactos = async (contactos) => {
    const contenido = contactos.map(c => `${c.id}|${c.nombre}|${c.telefono}|${c.email}`).join("\n")
    await fs.writeFile(archivo, contenido)
}

// OBTENER EL SIGUIENTE ID DISPONIBLE (A falta de SQL y Primary Key)
const obtenerSiguienteId = async () => {
    const contactos = await leerContactos()
    if (contactos.length === 0) return 1
    return Math.max(...contactos.map(c => c.id)) + 1
}

// AGREGAR CONTACTO NUEVO
const agregarContacto = async (contacto) => {
    const contactos = await leerContactos()
    const nuevoId = await obtenerSiguienteId()
    contactos.push({ id: nuevoId, ...contacto })
    await escribirContactos(contactos)
}

// OBTENER CONTACTO POR ID
const obtenerContactoPorId = async (id) => {
    const contactos = await leerContactos()
    return contactos.find(c => c.id === id)
}

// ACTUALIZAR CONTACTO
const actualizarContacto = async (id, datosActualizados) => {
    const contactos = await leerContactos()
    const index = contactos.findIndex(c => c.id === id)
    if (index !== -1) {
        contactos[index] = { ...contactos[index], ...datosActualizados }
        await escribirContactos(contactos)
    }
}

// ELIMINAR CONTACTO
const eliminarContacto = async (id) => {
    let contactos = await leerContactos()
    contactos = contactos.filter(c => c.id !== id)
    await escribirContactos(contactos)
}

module.exports = {
    leerContactos,
    agregarContacto,
    obtenerContactoPorId,
    actualizarContacto,
    eliminarContacto
}
