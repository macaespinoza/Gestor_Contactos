// BOOTCAMP FULL STACK JAVASCRIPT
// M06 - Evaluación de Módulo
// Alumna: Macarena Espinoza Gatica

const express = require("express")
const path = require("path")
const contactosRoutes = require("./routes/contactos.routes")

const methodOverride = require("method-override")

const { engine } = require("express-handlebars")

const app = express()
const PORT = process.env.PORT || 3000

app.engine("handlebars", engine({
    extname: ".handlebars",
    defaultLayout: "index",
    layoutsDir: path.join(__dirname, "views", "main")
}))
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname, "views"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname, "public")))

app.use("/", contactosRoutes)

app.use((req, res) => {
    res.status(404).render("error", { mensaje: "Página no encontrada" })
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).render("error", { mensaje: "Error interno del servidor" })
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
