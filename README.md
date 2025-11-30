# BOOTCAMP FULL STACK JAVASCRIPT
# M06 - Evaluación de Módulo
## Alumna: Macarena Espinoza Gatica
============================================================================

# Aplicación de Gestión de Contactos

Aplicación web para gestionar contactos usando Node.js, Express y Handlebars.

## Requisitos

- Node.js (v14 o superior)

## Instalación

1. Clonar o descargar el proyecto
2. Instalar dependencias:
```bash
npm install
```

## Ejecución

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## Estructura del proyecto

```
contactos-app/
├── app.js                 # Archivo principal del servidor
├── controllers/           # Controladores (lógica de negocio)
├── models/                # Modelos (acceso a datos)
├── routes/                # Definición de rutas
├── views/                 # Plantillas Handlebars
│   ├── main/              # Layouts principales
│   │   └── index.hbs      # Layout base (HTML structure)
│   ├── home.hbs           # Vista principal (Listado)
│   ├── editar.hbs         # Vista de edición
│   └── error.hbs          # Vista de error
├── public/                # Archivos estáticos
│   └── css/               # Hojas de estilo
└── data/                  # Almacenamiento de datos
    └── contactos.txt      # Archivo de persistencia
```

## Funcionalidades

- Listar contactos
- Agregar nuevo contacto
- Editar contacto existente
- Eliminar contacto

## Formato del archivo de datos

Los contactos se almacenan en `data/contactos.txt` con el formato:
```
id|nombre|telefono|email
```
