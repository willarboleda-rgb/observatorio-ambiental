'use strict';
(() => {
const el=id=>document.getElementById(id),dialog=el('a11y-dialog');
let prefs={size:'100',contrast:false,space:false,motion:false};
try{const p=JSON.parse(localStorage.getItem('observatorio-accesibilidad')||'{}');prefs={size:['100','125','150','200'].includes(p.size)?p.size:'100',contrast:p.contrast===true,space:p.space===true,motion:p.motion===true};}catch{}
function apply(){document.documentElement.style.setProperty('--reading-scale',Number(prefs.size)/100);for(const k of ['contrast','space','motion'])document.body.classList.toggle('a11y-'+k,prefs[k]);el('a11y-size').value=prefs.size;for(const k of ['contrast','space','motion'])el('a11y-'+k).checked=prefs[k];}
function save(){apply();try{localStorage.setItem('observatorio-accesibilidad',JSON.stringify(prefs));el('a11y-status').textContent='Preferencias aplicadas y guardadas.';}catch{el('a11y-status').textContent='Opciones aplicadas para esta sesión; no se pudieron guardar.';}}
el('a11y-open').onclick=()=>dialog.showModal();el('a11y-close').onclick=()=>dialog.close();
el('a11y-size').onchange=e=>{prefs.size=e.target.value;save();};for(const k of ['contrast','space','motion'])el('a11y-'+k).onchange=e=>{prefs[k]=e.target.checked;save();};
el('a11y-reset').onclick=()=>{prefs={size:'100',contrast:false,space:false,motion:false};save();};
el('a11y-stop').onclick=()=>{window.speechSynthesis?.cancel();el('a11y-status').textContent='Lectura detenida.';};
el('a11y-read').onclick=()=>{if(!('speechSynthesis' in window)){el('a11y-status').textContent='La lectura en voz no está disponible en este navegador.';return;}window.speechSynthesis.cancel();const text=el('contenido').innerText;const chunks=text.match(/[^.!?\n]+[.!?\n]*/g)||[text];for(const chunk of chunks){const u=new SpeechSynthesisUtterance(chunk);u.lang='es-CO';window.speechSynthesis.speak(u);}el('a11y-status').textContent='Lectura iniciada. Usa Detener lectura para terminarla.';dialog.close();};
// Native buttons support keyboard activation. Avoid incomplete tab semantics.
const observer=new MutationObserver(()=>{document.querySelectorAll('[role="tablist"]').forEach(n=>n.setAttribute('role','group'));document.querySelectorAll('[role="tab"]').forEach(n=>{n.setAttribute('role','button');n.setAttribute('aria-pressed',n.getAttribute('aria-selected'));n.removeAttribute('aria-selected');});document.querySelectorAll('.table-wrap').forEach(n=>{n.tabIndex=0;n.setAttribute('role','region');n.setAttribute('aria-label','Tabla de datos con desplazamiento horizontal');});});observer.observe(el('contenido'),{childList:true,subtree:true});apply();
})();
