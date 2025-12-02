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

## Despliegue en Railway

### Requisitos previos
- Cuenta en [Railway](https://railway.app/)
- Repositorio en GitHub con el código

### Pasos para desplegar

1. **Conectar con Railway**
   - Ingresa a [Railway](https://railway.app/)
   - Haz clic en "Start a New Project"
   - Selecciona "Deploy from GitHub repo"
   - Autoriza Railway para acceder a tu repositorio

2. **Configuración del proyecto**
   - Selecciona el repositorio `Gestor_Contactos`
   - Railway detectará automáticamente que es un proyecto Node.js
   - El archivo `railway.json` ya contiene la configuración necesaria

3. **Variables de entorno (opcional)**
   - La aplicación usa el puerto proporcionado por Railway automáticamente
   - No se requieren variables de entorno adicionales para el funcionamiento básico

4. **Desplegar**
   - Railway iniciará el build y deployment automáticamente
   - Una vez completado, obtendrás una URL pública para tu aplicación

### Notas importantes

- La aplicación usa almacenamiento en archivo de texto (`data/contactos.txt`)
- Los datos se perderán al reiniciar el contenedor en Railway
- Para persistencia de datos en producción, considera usar una base de datos

### URL de la aplicación
Una vez desplegada, Railway te proporcionará una URL similar a:
```
https://tu-proyecto.up.railway.app
```
