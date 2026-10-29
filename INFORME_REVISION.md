# Informe de revisión

Fecha: 29/10/2026. Versión 1.0-rc1 — final para revisión, no certificación de producción.

## Comprobado

- Lógica JavaScript de veinte pantallas (diez secciones en dos territorios), trece temas, siete indicadores y 111 fichas.
- Filtros, vacíos, rangos temporales, traslado de filtros entre paneles y descargas.
- Doce cifras de biodiversidad por sitio y coordenadas extraídas de las capas; exportaciones CSV, JSON y GeoJSON con contexto.
- Apertura/cierre del panel del visor, tabla alternativa, fichas y atlas separado.
- Opciones de accesibilidad: persistencia, restablecimiento y alternativa si no hay voz.
- Rutas con territorio y selector sincronizado. Enlaces internos desplazan sin cambiar de sección.
- Diecisiete enlaces documentales: respuesta HTTP 200. Esto comprueba disponibilidad, no validez científica ni accesibilidad de todo el PDF.
- Integridad ZIP, archivos y rutas de scripts/estilos. Leaflet local incluido con licencia.

## Límites conocidos y revisión pendiente

No se completó revisión visual automatizada del navegador por restricciones de conexión del entorno. Las capturas aportadas por el usuario permitieron identificar y corregir problemas previos. Esta entrega requiere recorrido visual final en navegador real, móvil, teclado, lector de pantalla y ampliación al 200 %. No se declara certificación WCAG.

Los 17 documentos originales requieren Internet por defecto; se pueden copiar localmente y configurar la base documental. Los PDF originales no han sido remediados para lectores de pantalla. No hay boletines de estaciones, autenticación administrativa, backend ni radicación institucional. Los valores de cb_estaciones no se publican como mediciones verificadas. La Buitrera no cuenta con una capa equivalente de mediciones incorporada.

Las diferencias de alcance entre cifras siguen explicadas en las fichas relevantes. Retirar el recuadro general solicitado no valida ni concilia automáticamente todas las fuentes.

## Estado de publicación

No se ha subido código ni modificado el sitio de GitHub Pages. Este es el paquete preparado para revisión y posterior publicación por el usuario.
