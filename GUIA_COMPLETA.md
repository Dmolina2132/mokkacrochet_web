# Guía Completa para Mokka Crochet - Para Personas Sin Experiencia Técnica

Esta guía está escrita para personas que NO saben nada de programación. Todo está explicado paso a paso, como si te lo explicara un amigo.

---

## ¿Qué es este proyecto?

Este proyecto es el sitio web de Mokka Crochet. Es una página web donde:
- Las personas pueden ver diseños de amigurumis
- Las personas pueden suscribirse a la newsletter
- Las personas pueden enviar mensajes de contacto
- Todo funciona en 3 idiomas: español, inglés y alemán

---

## Índice

1. [Estructura del proyecto](#estructura-del-proyecto)
2. [Cambiar cosas básicas](#cambiar-cosas-básicas)
3. [Añadir nuevas imágenes](#añadir-nuevas-imágenes)
4. [Ejecutar el sitio en tu computadora](#ejecutar-el-sitio-en-tu-computadora)
5. [Desplegar en producción (publicar en internet)](#desplegar-en-producción-publicar-en-internet)
6. [Configurar la base de datos](#configurar-la-base-de-datos)
7. [Configurar seguridad (SSL/TLS)](#configurar-seguridad-ssltls)
8. [Resumen completo del proceso](#resumen-completo-del-proceso)

---

## Estructura del Proyecto

El proyecto está organizado en carpetas. Solo necesitas saber estas carpetas importantes:

```
mokkacrochet_web/
├── src/
│   ├── config/
│   │   └── site.ts          ← Aquí están los datos de contacto
│   ├── components/          ← Componentes del sitio (menú, pie de página, etc.)
│   └── app/                 ← Páginas del sitio
├── messages/                ← Textos del sitio en 3 idiomas
│   ├── es.json             ← Textos en español
│   ├── en.json             ← Textos en inglés
│   └── de.json             ← Textos en alemán
├── public/                  ← Imágenes y archivos públicos
├── scripts/                 ← Scripts automáticos
├── prisma/                  ← Base de datos
└── Dockerfile              ← Configuración para Docker
```

**Solo necesitas tocar estas carpetas:**
- `src/config/site.ts` - Para cambiar email, WhatsApp, Instagram, Etsy
- `messages/` - Para cambiar textos del sitio
- `public/` - Para añadir nuevas imágenes

---

## Cambiar Cosas Básicas

### Cambiar email, WhatsApp, Instagram, Etsy

**Archivo a editar:** `src/config/site.ts`

**Pasos:**
1. Abre el archivo `src/config/site.ts` con cualquier editor de texto (TextEdit, VS Code, etc.)
2. Busca lo que quieres cambiar
3. Cambia el texto entre comillas
4. Guarda el archivo
5. Reinicia el sitio (ver sección "Ejecutar el sitio")

**Ejemplo:**

```typescript
// ANTES
email: "contacto@mokkacrochet.com",

// DESPUÉS
email: "nuevo-email@gmail.com",
```

### Cambiar textos del sitio

**Archivos a editar:**
- `messages/es.json` - Textos en español
- `messages/en.json` - Textos en inglés
- `messages/de.json` - Textos en alemán

**Pasos:**
1. Abre el archivo del idioma que quieres cambiar
2. Busca el texto que quieres cambiar
3. Cambia el texto entre comillas
4. Guarda el archivo
5. Recarga la página del navegador

---

## Añadir Nuevas Imágenes

### ¿Dónde poner las imágenes?

Todas las imágenes van en la carpeta `public/`.

**Pasos:**
1. Copia tu imagen a la carpeta `public/`
2. La imagen ahora está disponible en: `http://localhost:3000/tu-imagen.png`

### ¿Cómo usar la imagen en el sitio?

En el código, usa la ruta desde `public/`:

```typescript
// Si la imagen está en: public/logos/mi-logo.png
// Úsala así:
<img src="/logos/mi-logo.png" alt="Mi Logo" />
```

**NOTA:** No incluyas `public/` en la ruta. Empieza siempre con `/`.

---

## Ejecutar el Sitio en tu Computadora

### ¿Qué significa esto?

Significa que el sitio web funcionará en tu computadora para que puedas ver los cambios antes de publicarlo en internet.

### Opción 1: Ejecutar sin Docker (Más fácil para pruebas)

**Pasos:**
1. Abre la terminal (en Mac: Terminal, en Windows: CMD)
2. Navega a la carpeta del proyecto:
   ```bash
   cd /Users/diegomolina/Desktop/Projects/webpage_mokka/mokkacrochet_web
   ```
3. Instala las dependencias (solo la primera vez):
   ```bash
   npm install
   ```
4. Ejecuta el sitio:
   ```bash
   npm run dev
   ```
5. Abre tu navegador y ve a: `http://localhost:3000`

### Opción 2: Ejecutar con Docker (Para producción)

**¿Qué es Docker?**
Docker es un programa que hace que el sitio funcione igual en cualquier computadora o servidor.

**Pasos:**
1. Asegúrate de tener Docker instalado
2. Navega a la carpeta del proyecto:
   ```bash
   cd /Users/diegomolina/Desktop/Projects/webpage_mokka/mokkacrochet_web
   ```
3. Construye la imagen de Docker:
   ```bash
   docker build -t mokka-crochet .
   ```
4. Ejecuta el contenedor:
   ```bash
   docker run -p 3000:3000 mokka-crochet
   ```
5. Abre tu navegador y ve a: `http://localhost:3000`

### ¿Cómo detener el sitio?

**Sin Docker:** Presiona `Ctrl + C` en la terminal
**Con Docker:** Presiona `Ctrl + C` en la terminal o usa `docker stop`

---

## Desplegar en Producción (Publicar en Internet)

### ¿Qué significa desplegar?

Significa publicar el sitio web en internet para que otras personas puedan visitarlo.

### Opción 1: Vercel (Recomendado - Más fácil)

**¿Qué es Vercel?**
Vercel es un servicio gratuito que publica sitios web automáticamente. No necesitas configurar servidores ni nada técnico.

**Pasos:**

1. **Crear cuenta en Vercel:**
   - Ve a https://vercel.com
   - Haz clic en "Sign Up"
   - Regístrate con tu cuenta de GitHub, GitLab o email

2. **Conectar tu proyecto:**
   - Haz clic en "Add New Project"
   - Importa tu proyecto desde GitHub
   - Vercel detectará automáticamente que es un proyecto Next.js

3. **Publicar:**
   - Haz clic en "Deploy"
   - Espera unos minutos
   - Vercel te dará un URL (ej: https://mokka-crochet.vercel.app)

4. **Configurar dominio (opcional):**
   - Ve a Settings → Domains
   - Añade tu dominio (ej: mokkacrochet.com)
   - Sigue las instrucciones de Vercel para configurar DNS

**Ventajas:**
- Gratis
- SSL automático (HTTPS)
- No necesitas configurar servidores
- Se actualiza automáticamente cuando cambias el código

### Opción 2: Servidor propio con Docker

**¿Cuándo usar esta opción?**
- Si tienes un servidor propio
- Si quieres control total
- Si necesitas más personalización

**Pasos:**

1. **Comprar un dominio:**
   - Compra el dominio en Namecheap, GoDaddy, Google Domains, etc.
   - Costo aprox: $10-15 USD/año

2. **Configurar DNS:**
   - En el panel de tu registrador de dominio
   - Añade un registro A:
     - Tipo: A
     - Nombre: @ (o el dominio principal)
     - Valor: La IP pública de tu servidor
   - Espera 24-48 horas para la propagación DNS

3. **Instalar Docker en el servidor:**
   ```bash
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   sudo usermod -aG docker $USER
   ```

4. **Subir el código al servidor:**
   - Usa Git, FTP, o cualquier método para subir los archivos

5. **Construir y ejecutar Docker:**
   ```bash
   docker build -t mokka-crochet .
   docker run -d -p 3000:3000 --name mokka-crochet mokka-crochet
   ```

6. **Configurar Nginx y SSL (Ver sección siguiente)**

---

## Configurar la Base de Datos

### ¿Qué es una base de datos?

Una base de datos es donde se guardan:
- Los emails de la newsletter
- Los mensajes de contacto
- Cualquier información que necesites guardar

### Opción 1: SQLite (Para desarrollo local)

**¿Qué es SQLite?**
Es una base de datos simple que es un archivo en tu computadora. Es fácil pero no es ideal para producción.

**Configuración actual:**
- Archivo: `prisma/dev.db`
- Configuración: `prisma/schema.prisma`

**Para ver los datos:**
```bash
node scripts/view-db.js
```

### Opción 2: Supabase (Para producción - Recomendado)

**¿Qué es Supabase?**
Supabase es un servicio gratuito que te da una base de datos profesional sin necesidad de configurar servidores.

**Ventajas:**
- Gratis hasta 500MB (suficiente para empezar)
- Dashboard incluido para ver datos
- Backups automáticos
- SSL automático
- No necesitas configurar nada

**Pasos para configurar Supabase:**

1. **Crear cuenta en Supabase:**
   - Ve a https://supabase.com
   - Haz clic en "Start your project"
   - Regístrate con GitHub o email

2. **Crear proyecto nuevo:**
   - Haz clic en "New Project"
   - Elige un nombre (ej: mokka-crochet)
   - Elige una contraseña (¡guárdala!)
   - Elige una región (la más cercana a tus usuarios)
   - Haz clic en "Create new project"

3. **Obtener la URL de conexión:**
   - Ve a Settings → Database
   - Copia la "Connection String" → "URI"
   - Ejemplo: `postgresql://postgres:tu-password@db.abc123.supabase.co:5432/postgres`

4. **Configurar en tu proyecto:**
   - Abre el archivo `.env`
   - Añade esta línea:
     ```bash
     DATABASE_URL="postgresql://postgres:tu-password@db.abc123.supabase.co:5432/postgres"
     ```
   - Reemplaza `tu-password` con tu contraseña real

5. **Migrar la base de datos:**
   - Ejecuta el script:
     ```bash
     ./scripts/migrate-to-supabase.sh
     ```
   - Este script creará las tablas en Supabase

6. **Verificar la conexión:**
   - Ejecuta:
     ```bash
     npx prisma studio
     ```
   - Esto abrirá una interfaz visual para ver los datos

**Costos:**
- Gratis hasta 500MB (~50,000-100,000 registros)
- $25/mes por 8GB si necesitas más

---

## Configurar Seguridad (SSL/TLS)

### ¿Qué es SSL/TLS?

SSL/TLS es lo que hace que tu sitio tenga el candado verde (HTTPS). Es necesario para:
- Que el sitio sea seguro
- Que los navegadores confíen en tu sitio
- Para que funcione correctamente

### Si usas Vercel:

**No necesitas hacer nada.** Vercel configura SSL automáticamente.

### Si usas servidor propio:

Hay dos opciones: script automatizado o configuración manual.

#### Opción 1: Script automatizado (Más fácil)

**Pasos:**
1. Asegúrate de que:
   - Tu dominio apunta a la IP del servidor
   - Docker está ejecutándose en puerto 3000
   - El servidor es Ubuntu/Debian

2. Ejecuta el script:
   ```bash
   sudo ./scripts/setup-nginx-ssl.sh mokkacrochet.com contacto@mokkacrochet.com
   ```

3. El script hace automáticamente:
   - Instala Nginx
   - Configura Nginx como reverse proxy
   - Instala Certbot para SSL
   - Configura SSL/HTTPS
   - Configura firewall
   - Configura renovación automática de SSL

#### Opción 2: Configuración manual

**Ver el archivo INSTRUCCIONES.md para la configuración manual completa.**

---

## Resumen Completo del Proceso

### Objetivo Final

El objetivo final es tener un sitio web funcional en internet donde:
- Las personas puedan ver diseños de amigurumis
- Las personas puedan suscribirse a la newsletter
- Las personas puedan enviar mensajes de contacto
- Todo funcione en 3 idiomas
- Los datos se guarden en una base de datos
- El sitio sea seguro (HTTPS)
- El sitio tenga un dominio propio (ej: mokkacrochet.com)

### Flujo Completo

#### Paso 1: Desarrollo Local
1. Cambia textos e imágenes según necesites
2. Ejecuta el sitio localmente para ver cambios
3. Verifica que todo funciona correctamente

#### Paso 2: Configurar Base de Datos
1. Crea cuenta en Supabase
2. Crea proyecto nuevo
3. Obtiene la URL de conexión
4. Configura en el archivo `.env`
5. Ejecuta el script de migración
6. Verifica que funciona con `npx prisma studio`

#### Paso 3: Desplegar en Producción

**Opción A: Vercel (Recomendado)**
1. Crea cuenta en Vercel
2. Conecta tu proyecto desde GitHub
3. Haz clic en "Deploy"
4. Espera a que termine
5. Configura dominio (opcional)
6. ¡Listo!

**Opción B: Servidor propio**
1. Compra dominio
2. Configura DNS para apuntar a tu servidor
3. Espera propagación DNS (24-48 horas)
4. Instala Docker en el servidor
5. Sube el código al servidor
6. Construye y ejecuta Docker
7. Configura Nginx y SSL con el script automatizado
8. ¡Listo!

### Archivos Principales que Necesitas Conocer

| Archivo | Para qué sirve | ¿Cuándo editarlo? |
|---------|---------------|-------------------|
| `src/config/site.ts` | Datos de contacto | Cuando cambies email, WhatsApp, Instagram, Etsy |
| `messages/es.json` | Textos en español | Cuando quieras cambiar textos del sitio |
| `messages/en.json` | Textos en inglés | Cuando quieras cambiar textos en inglés |
| `messages/de.json` | Textos en alemán | Cuando quieras cambiar textos en alemán |
| `.env` | Configuración secreta | Cuando configures base de datos o API keys |
| `public/` | Imágenes y archivos públicos | Cuando quieras añadir imágenes |

### Scripts Automatizados

| Script | Para qué sirve | Cómo usarlo |
|--------|---------------|-------------|
| `scripts/view-db.js` | Ver datos de la base de datos | `node scripts/view-db.js` |
| `scripts/migrate-to-supabase.sh` | Migrar a Supabase | `./scripts/migrate-to-supabase.sh` |
| `scripts/setup-nginx-ssl.sh` | Configurar Nginx y SSL | `sudo ./scripts/setup-nginx-ssl.sh dominio.com email` |

### Comandos Principales

| Tarea | Comando |
|-------|---------|
| Ejecutar localmente (sin Docker) | `npm run dev` |
| Ejecutar localmente (con Docker) | `docker build -t mokka-crochet . && docker run -p 3000:3000 mokka-crochet` |
| Ver datos de base de datos | `node scripts/view-db.js` |
| Ver datos con Prisma Studio | `npx prisma studio` |
| Migrar a Supabase | `./scripts/migrate-to-supabase.sh` |

---

## Preguntas Frecuentes

### ¿Necesito saber programar?

**No.** Para las tareas básicas (cambiar textos, imágenes, datos de contacto) solo necesitas saber editar archivos de texto.

### ¿Necesito comprar algo?

**Para empezar:** No. Puedes ejecutar el sitio en tu computadora gratis.

**Para publicar en internet:**
- Vercel: Gratis
- Dominio: $10-15 USD/año (opcional)
- Supabase: Gratis hasta 500MB

### ¿Qué pasa si algo sale mal?

1. Verifica que estás en la carpeta correcta del proyecto
2. Asegúrate de que los archivos estén guardados
3. Reinicia el servidor
4. Si sigue fallando, revisa los mensajes de error

### ¿Puedo hacer todo esto solo?

**Sí.** Esta guía está diseñada para que puedas hacerlo solo, sin necesidad de un programador.

---

## Glosario de Términos Técnicos Simples

- **Servidor:** Una computadora que está siempre encendida y conectada a internet, donde vive tu sitio web.
- **Docker:** Un programa que hace que el sitio funcione igual en cualquier computadora.
- **Base de datos:** Un archivo donde se guardan los datos (emails, mensajes, etc.).
- **SSL/TLS:** Lo que hace que tu sitio tenga el candado verde (HTTPS).
- **DNS:** El sistema que traduce nombres (mokkacrochet.com) a direcciones IP.
- **Deploy:** Publicar el sitio en internet.
- **Local:** En tu computadora (no en internet).
- **Producción:** En internet, para que todo el mundo lo vea.

---

## ¿Necesitas ayuda?

Si tienes problemas:
1. Revisa que estás siguiendo exactamente los pasos
2. Asegúrate de estar en la carpeta correcta del proyecto
3. Verifica que los archivos estén guardados
4. Intenta reiniciar el servidor

---

**Última actualización:** 27 de abril de 2026
