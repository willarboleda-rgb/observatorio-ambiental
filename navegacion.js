'use strict';
(() => {
const routes=new Set(['inicio','paneles','indicadores','mapas','biodiversidad','descargas','biblioteca','reportes','participa','acerca']);
window.decorateNavigation=()=>{const territory=document.getElementById('territory').value;document.querySelectorAll('a[href^="#"]').forEach(a=>{const hash=a.getAttribute('href').slice(1),parts=hash.split('?');if(!routes.has(parts[0]))return;const p=new URLSearchParams(parts[1]||'');p.set('territorio',territory);a.setAttribute('href','#'+parts[0]+'?'+p.toString());});};
// In-page destinations must scroll, never be mistaken for app routes.
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const dest=a.getAttribute('href').slice(1);if(routes.has(dest.split('?')[0]))return;const node=document.getElementById(dest);if(!node)return;e.preventDefault();node.scrollIntoView({block:'start',behavior:'auto'});if(!node.hasAttribute('tabindex'))node.setAttribute('tabindex','-1');node.focus({preventScroll:true});},true);
new MutationObserver(()=>window.decorateNavigation()).observe(document.getElementById('contenido'),{childList:true,subtree:true});window.decorateNavigation();
})();
