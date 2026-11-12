'use strict';
window.CIUDAD_DATA = {
 version:'Visual de ciudad · 10/11/2026',
 estado:'demostrativo',
 fuente:'Prototipo original observatorio_ambiental_movil V2.zip y PDF Observatorio Ambiental.pdf compartidos por el usuario.',
 advertencia:'Cifras demostrativas del prototipo. No constituyen un consolidado oficial de Santiago de Cali ni una conexión a CEMUA o IDESC.',
 corte:'Sin fecha de corte oficial validada',
 resumen:[
  {id:'mediciones',valor:2486,etiqueta:'Mediciones ambientales',detalle:'Registros para la visual de ciudad',ruta:'indicadores'},
  {id:'visitas',valor:1028,etiqueta:'Visitas IVC al recurso hídrico',detalle:'Inspección, vigilancia y control',ruta:'ivc'},
  {id:'concesiones',valor:892,etiqueta:'Concesiones de agua vigentes',detalle:'Referencia del módulo hídrico',ruta:'paneles?tema=agua'},
  {id:'conjuntos',valor:124,etiqueta:'Conjuntos de datos abiertos',detalle:'Referencia de la portada original',ruta:'descargas'}
 ],
 temas:[
  {id:'agua',nombre:'Recurso hídrico',icono:'agua',descripcion:'Calidad y disponibilidad del agua, concesiones, vertimientos y seguimiento ciudadano.',estado:'Diseño del módulo disponible'},
  {id:'aire',nombre:'Aire',icono:'aire',descripcion:'Calidad del aire y lectura de contaminantes como PM2.5 y PM10, con sus fuentes y periodos.',estado:'Fichas documentales disponibles · series por incorporar'},
  {id:'ruido',nombre:'Ruido',icono:'ruido',descripcion:'Condiciones sonoras del entorno, puntos de medición y seguimiento a las intervenciones.',estado:'Fichas documentales disponibles · series por incorporar'}
 ],
 visitas:[{estado:'Cumplidas',cantidad:742,color:'#13774b'},{estado:'En proceso',cantidad:198,color:'#b77912'},{estado:'No cumplidas',cantidad:88,color:'#ba4c55'}],
 hallazgos:[{nombre:'Vertimientos sin permiso',cantidad:78},{nombre:'Ocupación de cauce',cantidad:56},{nombre:'Manejo inadecuado de residuos',cantidad:42},{nombre:'Uso no autorizado',cantidad:38},{nombre:'Intervención de rondas',cantidad:32}],
 vertimientos:[{estado:'Activos',cantidad:214},{estado:'Inactivos',cantidad:78},{estado:'En seguimiento',cantidad:50}],
 evidencias:[{nombre:'Evidencias cargadas',cantidad:256},{nombre:'Informes generados',cantidad:38},{nombre:'Documentos automáticos',cantidad:21}]
};
