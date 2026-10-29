/* Documentos originales de la release existente. Para copia sin Internet,
 * copiar documentos/ del paquete completo y cambiar documentBase a 'documentos/'.
 */
(() => {
 const documentBase = 'https://github.com/willarboleda-rgb/observatorio-ambiental/releases/download/documentos-v1/';
 for (const item of window.OBS_DATA.documents) {
  if (item.file.startsWith('documentos/')) item.file = documentBase + encodeURIComponent(item.file.slice('documentos/'.length));
 }
})();
