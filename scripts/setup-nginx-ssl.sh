#!/bin/bash

# Script automatizado para configurar Nginx y SSL
# Para Ubuntu/Debian
# Uso: sudo ./scripts/setup-nginx-ssl.sh mokkacrochet.com tu-email@ejemplo.com

set -e

# Verificar que se ejecuta como root
if [ "$EUID" -ne 0 ]; then 
    echo "Por favor, ejecuta este script como root (sudo)"
    exit 1
fi

# Verificar argumentos
if [ $# -lt 2 ]; then
    echo "Uso: $0 dominio.com email@ejemplo.com"
    echo "Ejemplo: $0 mokkacrochet.com contacto@mokkacrochet.com"
    exit 1
fi

DOMAIN=$1
EMAIL=$2

echo "=========================================="
echo "Configuración de Nginx y SSL para $DOMAIN"
echo "=========================================="

# Actualizar sistema
echo "Actualizando sistema..."
apt update && apt upgrade -y

# Instalar Nginx
echo "Instalando Nginx..."
apt install nginx -y

# Configurar Nginx como reverse proxy
echo "Configurando Nginx como reverse proxy..."
cat > /etc/nginx/sites-available/$DOMAIN <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

# Activar configuración
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/

# Eliminar configuración default
rm -f /etc/nginx/sites-enabled/default

# Verificar configuración Nginx
echo "Verificando configuración de Nginx..."
nginx -t

# Reiniciar Nginx
echo "Reiniciando Nginx..."
systemctl restart nginx
systemctl enable nginx

# Instalar Certbot
echo "Instalando Certbot..."
apt install certbot python3-certbot-nginx -y

# Configurar firewall (ufw)
echo "Configurando firewall..."
if command -v ufw &> /dev/null; then
    ufw allow 'Nginx Full'
    ufw allow ssh
    ufw --force enable
else
    echo "ufw no está instalado. Instalando..."
    apt install ufw -y
    ufw allow 'Nginx Full'
    ufw allow ssh
    ufw --force enable
fi

# Obtener certificado SSL
echo "Obteniendo certificado SSL para $DOMAIN..."
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email $EMAIL

# Configurar renovación automática
echo "Configurando renovación automática de SSL..."
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -

# Verificar configuración SSL
echo "Verificando configuración SSL..."
certbot renew --dry-run

echo "=========================================="
echo "¡Configuración completada!"
echo "=========================================="
echo ""
echo "Tu sitio ahora está configurado con:"
echo "- Nginx como reverse proxy en puerto 80/443"
echo "- SSL/HTTPS configurado con certificado de Let's Encrypt"
echo "- Renovación automática de SSL configurada"
echo "- Firewall configurado"
echo ""
echo "Asegúrate de:"
echo "1. Tu contenedor Docker esté ejecutándose en puerto 3000"
echo "2. Tu dominio ($DOMAIN) apunte a la IP de este servidor"
echo "3. Espera 24-48 horas para la propagación DNS"
echo ""
echo "Comandos útiles:"
echo "- Ver estado Nginx: systemctl status nginx"
echo "- Ver logs Nginx: tail -f /var/log/nginx/access.log"
echo "- Renovar SSL manualmente: certbot renew"
echo "- Verificar configuración Nginx: nginx -t"
echo ""
