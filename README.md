# EducSex — versión HTML5 + Bootstrap 5

## Tecnologías
- HTML5 semántico (`header`, `nav`, `main`, `section`, `footer`, formularios).
- Bootstrap 5.3.3 por CDN para cuadrícula, navegación adaptable, tarjetas, botones y formularios.
- CSS propio en `css/styles.css`.
- JavaScript en `js/` para interactividad.
- Leaflet + OpenStreetMap para el mapa.
- Opcional: Python/Flask para conectar el chat con una API de IA.

## Estructura
- `index.html`: página principal.
- `css/styles.css`: estilos personalizados.
- `js/mitos.js`: 12 mitos y realidades.
- `js/geoloc.js`: mapa y tres fichas editables.
- `js/chatbot.js`: chat y modo básico.
- `js/test.js`: test automático y reflexión.
- `app.py`, `requirements.txt`, `.env.example`: servidor opcional de IA.

## Probar el HTML
Abre `index.html` en un navegador con internet. Bootstrap, Leaflet y los mosaicos del mapa se cargan por CDN. Mitos, test y reflexión funcionan desde el navegador. La ubicación necesita permiso explícito y normalmente un contexto seguro (localhost o HTTPS).

## Activar IA (opcional)
1. Instala Python 3.10 o posterior.
2. En la terminal, dentro de esta carpeta, ejecuta `pip install -r requirements.txt`.
3. Copia `.env.example` a un archivo llamado `.env`.
4. En `.env`, agrega tu clave privada de API: `OPENAI_API_KEY=tu_clave`. La clave de API es independiente de una suscripción de ChatGPT y puede generar cargos. Nunca la publiques ni la coloques en HTML o JavaScript.
5. Ejecuta `python app.py`.
6. Abre `http://127.0.0.1:5000`. La IA no funciona al abrir el HTML con doble clic; el navegador debe acceder al servidor.
Sin clave, el chat usa respuestas básicas de respaldo.

## Rellenar centros de salud
Edita el arreglo `centros` en `js/geoloc.js`. Reemplaza nombre, dirección, teléfono, horario, descripción, ruta de imagen y coordenadas por datos reales verificados. Las coordenadas incluidas son marcadores de ejemplo y no deben presentarse como centros reales. Guarda las imágenes en `img/`.

## Privacidad
El chat con IA envía la pregunta al proveedor de IA cuando está configurado; no solicites ni compartas datos personales. El formulario de reflexión solo muestra las respuestas en la página y no las guarda ni las envía. La aplicación no sustituye la atención médica.
