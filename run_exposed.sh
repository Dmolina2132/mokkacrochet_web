#!/bin/bash
echo "Iniciando servidor local..."
npm run dev &
PID=$!

echo "Esperando a que el servidor arranque..."
sleep 5

echo "Exponiendo el puerto 3000..."
echo ""
echo "Prototipos de diseño (accesibles vía localtunnel):"
echo "  - Grid: [localtunnel-url]/es/designs-prototype-grid"
echo "  - Paginación: [localtunnel-url]/es/designs-prototype-pagination"
echo "  - Carrusel: [localtunnel-url]/es/designs-prototype-carousel"
echo "  - Original: [localtunnel-url]/es/designs"
echo ""
echo "Prototipos de patrones (accesibles vía localtunnel):"
echo "  - Grid: [localtunnel-url]/es/patterns-prototype-grid"
echo "  - Paginación: [localtunnel-url]/es/patterns-prototype-pagination"
echo "  - Carrusel: [localtunnel-url]/es/patterns-prototype-carousel"
echo "  - Original: [localtunnel-url]/es/patterns"
echo ""
npx localtunnel --port 3000

# Cuando se pare localtunnel, también matamos el servidor de next
kill $PID
