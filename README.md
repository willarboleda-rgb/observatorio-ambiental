# Observatorio Ambiental

Prototipo ciudadano de Comuna 22 y La Buitrera, desarrollado con HTML, CSS y JavaScript puro.

## Edición en VS Code
Abrir esta carpeta, con index.html en la raíz. No requiere npm install ni compilación.

Para la consulta local completa, copiar la carpeta documentos/ del ZIP original a esta carpeta.
Está excluida de Git mediante .gitignore. Se conservan las imágenes y los mapas en assets/.

## Publicación
1. Subir el contenido de esta carpeta a la raíz del repositorio.
2. Crear una release con el tag exacto documentos-v1 y adjuntar los 17 archivos que están dentro
   de documentos/ del proyecto completo, con sus nombres originales. No adjuntar solamente el ZIP.
3. Comprobar nombres y tamaños con documentos_manifest.json.
4. Para una publicación pública, revisar y autorizar la divulgación del código y de esos soportes.
   Mientras el repositorio sea privado, sus documentos de release también requieren acceso.
5. Cuando la visibilidad y el plan permitan usar Pages, seleccionar Settings > Pages,
   publicación desde la rama main y la carpeta / (root).
6. Comprobar el estado de publicación y la URL real que devuelva GitHub.

documentos-config.js usa documentos/ al ejecutar localmente y una release documentos-v1
al ejecutar bajo willarboleda-rgb.github.io. Si cambia el propietario o repositorio, actualizar
esa configuración. En otros dominios, ajustar la base documental antes de publicar.

Las URLs de release están PRECONFIGURADAS: no se ha comprobado que los archivos estén subidos.
GitHub suele descargar los archivos adjuntos de una release; el botón Abrir puede iniciar una
descarga en vez de mostrar el PDF dentro del navegador. Los enlaces #page=N dependen del visor.

## Alcance
Consulta sin registro. Notas personales en localStorage, sin envío a entidades ni radicados.
No hay backend, base de datos central ni conexión operativa con CEMUA o IDESC.
La cartografía es un atlas de imágenes. La interfaz no incluye panel administrativo.

## Entrega de fuentes
Este repositorio versiona el código, las imágenes, los mapas y el manifiesto de documentos.
Los documentos grandes se distribuyen como archivos de release y se conservan en el paquete
original. Para entregar una copia completa sin conexión, incluir nuevamente documentos/.
