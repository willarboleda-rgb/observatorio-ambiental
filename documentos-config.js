/* Configuración para willarboleda-rgb/observatorio-ambiental.
 * En local, copiar documentos/ desde el paquete completo.
 * En GitHub Pages, subir primero sus 17 archivos a la release documentos-v1.
 */
(() => {
  const releaseBase = 'https://github.com/willarboleda-rgb/observatorio-ambiental/releases/download/documentos-v1/';
  const isPages = location.hostname === 'willarboleda-rgb.github.io';
  const base = isPages ? releaseBase : 'documentos/';
  for (const item of window.OBS_DATA.documents) {
    if (item.file.startsWith('documentos/')) {
      const name = item.file.slice('documentos/'.length);
      item.file = base + encodeURIComponent(name);
    }
  }
})();
