# Guía para Usuarios Sin Experiencia Técnica

Esta guía está escrita para personas que no saben programar pero necesitan hacer cambios básicos en el sitio web de Mokka Crochet.

---

## Índice
1. [Cambiar información de contacto](#cambiar-información-de-contacto)
2. [Ver mensajes y suscriptores](#ver-mensajes-y-suscriptores)
3. [Ejecutar el sitio localmente](#ejecutar-el-sitio-localmente)
4. [Desplegar el sitio en internet](#desplegar-el-sitio-en-internet)
5. [Cambiar textos del sitio](#cambiar-textos-del-sitio)

---

## Cambiar Información de Contacto

### ¿Dónde están los datos de contacto?

Todos los datos de contacto están en un solo archivo para que sea fácil cambiarlos.

**Archivo:** `src/config/site.ts`

### ¿Qué puedes cambiar en este archivo?

- **Email de contacto:** Cambia el correo donde recibirás mensajes
- **WhatsApp:** Cambia el número de teléfono y el enlace
- **Instagram:** Cambia el nombre de usuario y el enlace
- **Etsy:** Cambia el nombre de la tienda y el enlace

### Pasos para cambiar los datos:

1. Abre el archivo `src/config/site.ts` con un editor de texto (como VS Code, TextEdit, o cualquier editor de texto)
2. Busca la sección que quieres cambiar
3. Cambia el texto entre comillas
4. Guarda el archivo
5. Reinicia el servidor (ver sección "Ejecutar el sitio localmente")

### Ejemplo:

Si quieres cambiar el email de contacto:

```typescript
// ANTES
email: "contacto@mokkacrochet.com",

// DESPUÉS
email: "nuevo-email@gmail.com",
```

---

## Ver Mensajes y Suscriptores

### ¿Cómo ver los mensajes de contacto?

Hay un script especial que te muestra todos los mensajes y suscriptores de la newsletter.

**Ejecutar el script:**

```bash
node scripts/view-db.js
```

Este comando te mostrará:
- Todos los suscriptores a la newsletter (email y fecha)
- Todos los mensajes de contacto (nombre, email, fecha y mensaje)

### ¿Dónde se guardan los datos?

Los datos se guardan en una base de datos llamada `dev.db` que está en la carpeta principal del proyecto.

---

## Ejecutar el Sitio Localmente

### ¿Qué significa "ejecutar localmente"?

Significa que el sitio web funcionará en tu computadora para que puedas ver los cambios antes de publicarlo en internet.

### Pasos para ejecutar el sitio:

1. Abre una terminal (en Mac: Terminal, en Windows: CMD)
2. Navega a la carpeta del proyecto:
   ```bash
   cd /Users/diegomolina/Desktop/Projects/webpage_mokka
   ```
3. Ejecuta el script local:
   ```bash
   ./run_local.sh
   ```
4. Abre tu navegador y ve a: `http://localhost:3000`

### ¿Cómo detener el servidor?

En la terminal donde está ejecutándose el servidor, presiona `Ctrl + C`

---

## Desplegar el Sitio en Internet

### ¿Qué es desplegar?

Desplegar significa publicar el sitio web en internet para que otras personas puedan visitarlo.

### Opciones de despliegue

#### Opción 1: LocalTunnel (para pruebas rápidas)

Esta opción permite compartir el sitio temporalmente.

1. Ejecuta el script:
   ```bash
   ./run_exposed.sh
   ```
2. El script te dará un enlace que puedes compartir
3. Este enlace es temporal y cambia cada vez que lo ejecutas

#### Opción 2: Vercel (para producción - recomendado)

Vercel es un servicio gratuito que facilita el despliegue.

**Pasos básicos:**
1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Next.js
4. Haz clic en "Deploy"
5. Vercel te dará un URL permanente (ej: https://mokka-crochet.vercel.app)

#### Opción 3: Docker con servidor propio

Si tienes acceso a un servidor con Docker, usa el script automatizado:

**Script de configuración automatizado:**

Hay un script que configura automáticamente Nginx y SSL en tu servidor Ubuntu/Debian:

```bash
sudo ./scripts/setup-nginx-ssl.sh mokkacrochet.com contacto@mokkacrochet.com
```

Este script hace automáticamente:
- Instala Nginx
- Configura Nginx como reverse proxy
- Instala Certbot para SSL
- Configura SSL/HTTPS con certificado de Let's Encrypt
- Configura firewall
- Configura renovación automática de SSL

**Requisitos:**
- Ubuntu/Debian
- Dominio comprado y configurado para apuntar a la IP del servidor
- Docker ejecutándose en puerto 3000

**Si prefieres configurar manualmente, ver la sección "Configuración de Nginx y SSL" al final de este documento.**

---

## Cambiar Textos del Sitio

### ¿Dónde están los textos?

Los textos del sitio están en archivos de traducción en la carpeta `messages/`.

**Archivos:**
- `messages/es.json` - Textos en español
- `messages/en.json` - Textos en inglés
- `messages/de.json` - Textos en alemán

### ¿Cómo cambiar un texto?

1. Abre el archivo del idioma que quieres cambiar (ej: `messages/es.json`)
2. Busca el texto que quieres cambiar
3. Cambia el texto entre comillas
4. Guarda el archivo
5. Recarga la página del navegador

### Estructura de los archivos de traducción

Los archivos están organizados por secciones:

```json
{
  "Navbar": {
    "home": "Inicio",
    "designs": "Diseños",
    ...
  },
  "Contact": {
    "title": "Contacta con Nosotros",
    ...
  },
  ...
}
```

### Ejemplo:

Si quieres cambiar el título de la página de contacto:

```json
// ANTES
"Contact": {
  "title": "Contacta con Nosotros",
  ...
}

// DESPUÉS
"Contact": {
  "title": "Contáctanos",
  ...
}
```

---

## Problemas Comunes

### El servidor no arranca

**Solución:** Asegúrate de que estás en la carpeta correcta del proyecto antes de ejecutar el script.

### Los cambios no aparecen

**Solución:** 
1. Presiona `Ctrl + C` para detener el servidor
2. Ejecuta `./run_local.sh` nuevamente
3. Recarga la página del navegador

### Error de "puerto en uso"

**Solución:** Esto significa que ya hay un servidor ejecutándose. Detén el servidor anterior con `Ctrl + C` y ejecútalo nuevamente.

---

## Glosario de Términos Técnicos

- **Servidor:** Programa que hace que el sitio web funcione
- **Terminal:** Programa donde se ejecutan comandos de texto
- **Script:** Archivo con instrucciones automáticas
- **Base de datos:** Archivo donde se guardan los mensajes y suscriptores
- **Desplegar:** Publicar el sitio en internet
- **Local:** En tu computadora (no en internet)

---

## ¿Necesitas ayuda?

Si tienes problemas que no están cubiertos en esta guía:

1. Verifica que estás siguiendo exactamente los pasos
2. Asegúrate de que estás en la carpeta correcta del proyecto
3. Revisa que los archivos que modificaste estén guardados
4. Intenta reiniciar el servidor

---

## Resumen Rápido

| Tarea | Comando/Archivo |
|-------|-----------------|
| Cambiar email/WhatsApp/Instagram | Editar `src/config/site.ts` |
| Ver mensajes y suscriptores | `node scripts/view-db.js` |
| Ejecutar sitio localmente | `./run_local.sh` |
| Compartir sitio temporalmente | `./run_exposed.sh` |
| Cambiar textos | Editar `messages/es.json` (u otro idioma) |
| Configurar Nginx y SSL (automático) | `sudo ./scripts/setup-nginx-ssl.sh dominio.com email` |

---

## Configuración Manual de Nginx y SSL

Si prefieres configurar Nginx y SSL manualmente en lugar de usar el script automatizado, sigue estos pasos:

### Paso 1: Instalar Nginx

```bash
sudo apt update
sudo apt install nginx
```

### Paso 2: Configurar Nginx como Reverse Proxy

Crea un archivo de configuración:

```bash
sudo nano /etc/nginx/sites-available/tu-dominio
```

Añade este contenido (reemplaza `tu-dominio.com` con tu dominio real):

```nginx
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Activar la configuración:

```bash
sudo ln -s /etc/nginx/sites-available/tu-dominio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Paso 3: Configurar SSL con Certbot

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com
```

Certbot te pedirá:
- Tu email para renovaciones
- Aceptar términos de servicio
- Si quieres compartir email con EFF (opcional)

### Paso 4: Configurar Firewall

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw enable
```

### Paso 5: Verificar Renovación Automática

```bash
sudo certbot renew --dry-run
```

### Comandos Útiles

```bash
# Reiniciar Nginx
sudo systemctl restart nginx

# Ver estado Nginx
sudo systemctl status nginx

# Ver logs Nginx
sudo tail -f /var/log/nginx/access.log

# Renovar SSL manualmente
sudo certbot renew

# Verificar configuración Nginx
sudo nginx -t
```

---

**Última actualización:** 27 de abril de 2026
