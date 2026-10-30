# Escudo Transparente — página de descarga

Este proyecto contiene la página pública para descargar e instalar **Escudo Transparente v9.6.0**.

## Estructura

- `dist/`: sitio web que se publica.
- `dist/downloads/`: ZIP que descargan los usuarios.
- `extension-source/`: código editable de la extensión.
- `render.yaml`: configuración opcional para desplegar el sitio estático en Render.

## Abrirlo en VS Code

1. Descomprime `Escudo-Transparente-Web-v9.6.0.zip`.
2. En VS Code selecciona **Archivo > Abrir carpeta**.
3. Elige la carpeta `Escudo-Transparente-Web-v9.6.0`.
4. Abre `dist/index.html`.
5. Para verlo como sitio web, instala la extensión **Live Server** de VS Code y usa **Open with Live Server** sobre `dist/index.html`.

También puedes abrir `dist/index.html` directamente con Chrome. Live Server es recomendable para revisar los enlaces y cambios mientras editas.

## Publicarlo en Render

La página debe publicarse como un servicio distinto del backend.

1. Sube esta carpeta a un repositorio de GitHub.
2. En Render selecciona **New > Static Site**.
3. Conecta el repositorio.
4. Usa esta configuración:
   - **Name:** `escudo-transparente-web`
   - **Branch:** la rama principal de tu repositorio
   - **Root Directory:** déjalo vacío
   - **Build Command:** `echo "Sitio estático listo"`
   - **Publish Directory:** `dist`
5. Pulsa **Create Static Site**.

El archivo `render.yaml` permite crear la misma configuración como Blueprint.

## Importante

- Este sitio no necesita variables de entorno ni API keys.
- Las API keys siguen únicamente en el backend de Render.
- La extensión incluida ya apunta a:
  `https://phishing-detection-extension-ax0o.onrender.com`
- Si modificas la extensión, vuelve a crear el ZIP dentro de `dist/downloads/` y actualiza el SHA-256 mostrado en `dist/index.html`.

