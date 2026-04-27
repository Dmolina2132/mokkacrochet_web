#!/bin/bash

# Script para migrar de SQLite a Supabase
# Uso: ./scripts/migrate-to-supabase.sh

set -e

echo "=========================================="
echo "Migración a Supabase"
echo "=========================================="

# Verificar que el usuario ha configurado DATABASE_URL
if [ -z "$DATABASE_URL" ]; then
    echo "ERROR: DATABASE_URL no está configurado en .env"
    echo ""
    echo "Pasos para configurar Supabase:"
    echo "1. Ve a https://supabase.com"
    echo "2. Crea un proyecto nuevo"
    echo "3. Ve a Settings → Database"
    echo "4. Copia la Connection String → URI"
    echo "5. Añádela a tu archivo .env:"
    echo "   DATABASE_URL=\"postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres\""
    echo ""
    exit 1
fi

# Verificar que DATABASE_URL apunta a PostgreSQL
if [[ ! "$DATABASE_URL" =~ ^postgresql:// ]]; then
    echo "ERROR: DATABASE_URL debe ser una URL de PostgreSQL"
    echo "Actual: $DATABASE_URL"
    exit 1
fi

echo "DATABASE_URL configurada correctamente"
echo ""

# Instalar dependencias
echo "Instalando dependencias..."
npm install

# Generar cliente Prisma
echo "Generando cliente Prisma..."
npx prisma generate

# Ejecutar migración
echo "Ejecutando migración a Supabase..."
npx prisma db push

echo ""
echo "=========================================="
echo "¡Migración completada!"
echo "=========================================="
echo ""
echo "Tu base de datos ahora está en Supabase."
echo "Puedes ver los datos en el dashboard de Supabase:"
echo "https://supabase.com/dashboard"
echo ""
echo "Para verificar la conexión:"
echo "npx prisma studio"
echo ""
