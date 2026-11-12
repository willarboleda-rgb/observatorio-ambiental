# Observatorio Ambiental — visual de ciudad

Propuesta local · 10/11/2026. No publicada en GitHub.

## Abrir

Descomprime el paquete en una carpeta nueva y abre `observatorio-ambiental/index.html`. Santiago de Cali es la entrada inicial. El selector superior permite cambiar a Comuna 22 y La Buitrera. El logotipo regresa al inicio de ciudad.

## Orden de la portada

Portada con la misma fotografía del pájaro → Cali en cifras ambientales (resumen IVC y cuatro tarjetas de cifras) → Recurso hídrico, Aire y Ruido → accesos a los observatorios locales.

La tarjeta Puntos de vertimiento se retira del resumen de seguimiento y las tres tarjetas restantes se redistribuyen. El menú lateral conserva su estructura; Visitas IVC se añade en el ámbito de Cali. Las tarjetas locales complementan el acceso del selector superior. Cada enlace conserva su ámbito.

## Datos demostrativos autorizados

Las cifras de ciudad proceden de la propuesta original del ZIP y del PDF compartidos. Se usan únicamente para revisar la visual; no son un consolidado oficial ni valores aproximados verificados. La portada, los paneles, las tablas y los archivos exportados los identifican como demostrativos y sin fecha de corte oficial.

Las 1.028 visitas IVC son un total de ejemplo distribuido en tres categorías (742, 198 y 88). No se inventaron 1.028 expedientes individuales. Los cinco tipos de hallazgo mostrados suman 246; no se anuncian como el total de hallazgos de ciudad. Los tres estados de vertimientos suman 342.

Aire y Ruido incorporan seis fichas documentales, sus PDF y una guía de interpretación. No se cargaron series actuales de medición. No se trasladan a ciudad las cifras de Comuna 22 o La Buitrera.

## Archivos nuevos

- `ciudad-data.js`: valores demostrativos y procedencia.
- `ciudad.js`: portada de ciudad, tres temas, IVC, tablas, filtros y CSV.
- `ciudad.css`: diseño adaptativo que conserva el menú lateral.
- `referencias/Observatorio_Ambiental_Referencia.pdf`: PDF original compartido, referencia visual.
- `referencias/Mockup_Cali_Portada.png`: mockup conceptual de la portada.
- `NECESIDADES_DE_DATOS.md`: insumos para sustituir los ejemplos.

Los mapas y recursos locales van incluidos. Los documentos de Comuna 22 y La Buitrera continúan en la release pública existente y requieren Internet por defecto. Consultarlos no publica esta visual.

## Revisión

Pruebas programáticas de once rutas de ciudad y regresiones de las veinte pantallas territoriales, orden de cifras antes de temas, tres ámbitos, tres temas de ciudad, IVC agregado, filtros, vacíos y limpieza. No se completó QA visual del HTML en navegador real: el control del navegador se detuvo por una restricción de seguridad del entorno. El PNG entregado es un mockup conceptual creado con SVG; no es una captura de navegador. La revisión de interfaz en móvil, teclado y lectores de pantalla sigue pendiente.

La URL de referencia se revisó en modo lectura. Este paquete no se ha subido a esa URL ni al GitHub del proyecto. Para revisar la visual, usa primero la copia local.


## Nueva incorporación

Lee AIRE_RUIDO_LEEME.md para el detalle de los dos PDF, las seis fichas y los valores históricos citados.

## Mapa interactivo de Cali · 10 de noviembre de 2026

En Santiago de Cali → Explora tu territorio → Mapas del territorio se incorpora un visor local con 22 comunas y 15 corregimientos. Cartografía administrativa: IDESC, DIVIPOLA 2026, https://idesc.cali.gov.co/download/divipola/divipola.zip. Las vías y drenajes se usan como contexto cartográfico de la entrega SIG compartida.

Los 81 puntos ambientales constituyen un escenario sintético para probar filtros; no son estaciones, visitas ni mediciones oficiales. Sus ubicaciones se generaron dentro de los polígonos administrativos. Esta identificación se conserva en `cali-mapa-data.js` y en las exportaciones, sin franja informativa en pantalla, según lo solicitado para la presentación.

Filtros: zona urbana/rural, comuna o corregimiento, componente, indicador, seguimiento, búsqueda y fechas. Se actualizan mapa, tabla y descarga. Exportación: CSV, JSON y GeoJSON de toda la selección, con coordenadas y procedencia. Las fichas se consultan desde el mapa o la tabla. La cartografía del visor funciona sin servicios externos de teselas.

Los puntos del escenario son independientes de los contadores agregados de la portada. No se calcula cumplimiento normativo ni ICA con ellos. El mapa de Comuna 22 y la información de La Buitrera se conservan.

Validación adicional: filtros y rangos vacíos; 66 puntos urbanos y 15 rurales; exportaciones filtradas en tres formatos. La revisión visual en un navegador real sigue pendiente. Este paquete no se ha publicado.
