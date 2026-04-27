# Mokka Crochet - Web App

Esta es la página web completa y funcional para Mokka Crochet, construida siguiendo las mejores prácticas de la industria con **Next.js**, **React**, y **SQLite** (vía Prisma ORM). Está diseñada para ser rápida, amigable para el SEO y fácil de desplegar.

## Requisitos Previos

Para ejecutar este proyecto, necesitas tener instalados los siguientes programas:

1. **Node.js (Versión 20.19 o superior)**
   - **¿Para qué sirve?** Es el entorno de ejecución necesario para correr JavaScript/TypeScript en el servidor y construir la web.
   - **Descarga oficial:** [https://nodejs.org/](https://nodejs.org/) (Descarga la versión LTS).
   
2. **Docker (Opcional, recomendado para despliegues)**
   - **¿Para qué sirve?** Permite empaquetar la aplicación con todo lo que necesita para correr en cualquier máquina de forma segura y aislada.
   - **Descarga oficial:** [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

## Cómo probar la página

He creado dos scripts (piezas de código) muy sencillos para que puedas probar la página de dos formas distintas:

### 1. Prueba Local (Solo en tu ordenador)

Para ver y probar la página en tu propio ordenador de manera privada:

Abre tu terminal en la carpeta del proyecto (`webpage_mokka`) y ejecuta:
```bash
./run_local.sh
```
*Si tienes problemas con permisos, ejecuta primero: `chmod +x run_local.sh`*

Esto iniciará la página. Abre tu navegador y ve a: [http://localhost:3000](http://localhost:3000)

### 2. Prueba Expuesta (Para compartir con compañeros)

Si quieres enseñarle la página a otras personas (estén donde estén), puedes usar este script que crea un "túnel" temporal y seguro hacia tu ordenador:

```bash
./run_exposed.sh
```
*Si tienes problemas con permisos, ejecuta primero: `chmod +x run_exposed.sh`*

1. El script arrancará la web y luego usará una herramienta llamada `localtunnel`.
2. Te mostrará un enlace del tipo `https://algo-aleatorio.loca.lt`.
3. Pásale ese enlace a tus compañeros. **Nota:** La primera vez que entren les pedirá una contraseña o confirmación por seguridad (suele ser la IP de tu ordenador o un simple click, la propia página de localtunnel lo explica).

## Despliegue en Producción (Docker)

El `Code Design Agent` ha preparado el proyecto para la industria. Se incluye un `Dockerfile` y un `docker-compose.yml`.

Para desplegar la aplicación en un servidor de producción real (ej. Amazon AWS, DigitalOcean), solo necesitas instalar Docker en el servidor y ejecutar:

```bash
docker-compose up -d --build
```

Esto levantará la página en el puerto 3000 de manera ininterrumpida, y mantendrá la base de datos a salvo en el archivo `dev.db`.

## Siguientes Pasos (Mejoras Futuras sugeridas por los Agentes)

- **Backend Agent:** Migrar SQLite a PostgreSQL en la nube (ej. Supabase o Neon) para mayor seguridad cuando el tráfico crezca. Solo habría que cambiar una línea en `schema.prisma`.
- **Frontend Agent:** Añadir animaciones de entrada (Framer Motion) a los productos para hacerla aún más dinámica.
- **Scraping Agent:** Integrar automáticamente el feed de Instagram en la Home usando la API de Instagram.
- **Marketing Agent:** Implementar un blog para ayudar a posicionar en Google con artículos sobre "Cómo empezar a tejer".
