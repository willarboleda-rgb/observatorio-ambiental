# Observatorio Ambiental — versión final para revisión

Versión 1.0-rc1 · 29 de octubre de 2026. Consulta ciudadana de Comuna 22 y La Buitrera.

## Abrir localmente

Descomprime el ZIP en una carpeta nueva. Abre `observatorio-ambiental/index.html` en Chrome o Edge. También funciona servido con Live Server. No requiere instalación, compilación ni cuenta. Abrirlo no publica los cambios.

El visor, su biblioteca y el fondo geográfico están incluidos localmente; no solicitan teselas a OpenStreetMap. Los 17 documentos grandes se consultan desde la release pública `documentos-v1` ya existente y requieren Internet. No están repetidos en este ZIP. Se verificó respuesta HTTP 200 en los 17 enlaces el 29/10/2026. Su apertura como PDF o descarga depende del navegador y del servidor.

Para disponer de los documentos sin Internet, copia la carpeta `documentos/` del paquete completo original y cambia `documentBase` a `'documentos/'` en `documentos-config.js`.

## Qué revisar

Lee `MANUAL_USUARIO.md` para recorrer las pantallas y `INFORME_REVISION.md` para conocer lo comprobado y lo pendiente. `CAMBIOS.md` resume esta entrega.

## Publicación en el repositorio existente

Este paquete NO está publicado. Cuando se apruebe: subir el contenido de `observatorio-ambiental/` a la raíz de `willarboleda-rgb/observatorio-ambiental`, conservando `assets/`, `vendor/` y la release documental existente. No subir solo el ZIP ni crear una carpeta exterior adicional en GitHub. GitHub Pages mantiene `main` y `/ (root)`. Conservar los 17 adjuntos de `documentos-v1`.

No es necesario subir los paquetes anteriores ni sus archivos LEEME históricos. Los archivos antiguos `mapa-demo.js` y `mapa-demo-data.js` no son cargados por esta versión.

## Tecnología y alcance

HTML, CSS y JavaScript, sin backend ni base de datos central. Leaflet 1.9.4 se incluye en `vendor/leaflet` con su licencia. Notas y preferencias de accesibilidad usan almacenamiento local del navegador. No se envían reportes a entidades, no se generan radicados y no hay conexión operativa con sensores, CEMUA o IDESC.

Los datos documentales conservan periodos y fuentes. La Buitrera presenta fichas formuladas sin serie cargada. No se declara certificación de accesibilidad ni puesta en producción institucional.
