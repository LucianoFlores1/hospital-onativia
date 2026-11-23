// Datos reales de servicios (fuente: investigacion/inventario-contenido.md)
var SERVICIOS=[
  ["Anatomía Patológica y Biología Molecular","Diagnóstico","Biopsias, citologías y marcadores moleculares en tumores endocrinos.","biopsia puncion"],
  ["Cardiología","Especialidad","Consultorios y Unidad de Monitoreo Intensivo.","corazon presion"],
  ["Cirugía bariátrica","Cirugía","Gastrectomía vertical y bypass gástrico, con equipo interdisciplinario.","obesidad manga"],
  ["Cirugía endocrina y tiroidea","Cirugía","Cirugía de tiroides, paratiroides y suprarrenales. Centro de referencia.","tiroides bocio nodulo"],
  ["Cirugía general y anestesia","Cirugía","Cirugías programadas.","operacion quirofano"],
  ["Cirugía Percutánea e Imágenes","Diagnóstico","Ecografías y procedimientos guiados por imágenes.","ecografia"],
  ["Cirugía vascular y traumatológica","Cirugía","Patología vascular y traumatológica.","venas huesos"],
  ["Clínica Médica","Especialidad","Atención clínica de adultos, guardia y sala de internación.","medico clinico"],
  ["Cooperadora Asistencial","Apoyo","Medicamentos, estudios y traslados para pacientes sin recursos.","ayuda donar"],
  ["Diabetes","Especialidad","Diagnóstico, control y educación. Centro de referencia.","azucar insulina glucemia"],
  ["Endocrinología","Especialidad","Tiroides, hipófisis y suprarrenales. Centro de referencia.","hormonas tiroides"],
  ["Enfermería","Apoyo","Cuidados en todos los turnos y sectores.","enfermera"],
  ["Farmacia y Esterilización","Apoyo","Medicamentos para pacientes del hospital.","remedios"],
  ["Fonoaudiología","Tratamiento","Voz, deglución y audición.","voz habla"],
  ["Genética Clínica y Citogenética","Diagnóstico","Asesoramiento a familias con riesgo genético.","cariotipo"],
  ["Hemodiálisis","Tratamiento","17 puestos en tres turnos. Único centro en un hospital público de Salta.","dialisis riñon renal"],
  ["Hemoterapia","Tratamiento","Transfusiones y donación de sangre.","sangre donar"],
  ["Hepatitis Virales (UNHEVI)","Especialidad","Diagnóstico y tratamiento de hepatitis virales.","higado"],
  ["Kinesiología","Tratamiento","Rehabilitación y fisioterapia.","rehabilitacion gimnasio"],
  ["Laboratorio Bioquímico","Diagnóstico","Análisis clínicos y hormonales.","analisis sangre extraccion"],
  ["Medicina Nuclear","Diagnóstico","Centellogramas y tratamientos con radioisótopos. Único servicio público del NOA.","centellograma yodo"],
  ["Nefrología","Especialidad","Enfermedades del riñón e insuficiencia renal.","riñon renal"],
  ["Nutrición","Especialidad","Obesidad, alimentación y nutrición clínica.","dieta peso"],
  ["Odontología","Especialidad","Atención odontológica.","dientes dentista"],
  ["Patología mamaria y ginecológica","Cirugía","Diagnóstico y cirugía de mama y ginecológica.","mama"],
  ["Salud Mental","Especialidad","Psicología y acompañamiento.","psicologia"],
  ["Servicio Social","Apoyo","Orientación y ayuda para pacientes y familias.","tramites ayuda"],
  ["Trasplante Renal","Tratamiento","Evaluación, trasplante y seguimiento, con o sin obra social.","riñon trasplante"],
  ["Unidad de Cuidados Intensivos","Tratamiento","Pacientes críticos.","terapia intensiva"],
  ["Urología","Cirugía","Patología urológica y trasplante.","prostata riñon"],
  ["Vacunatorio","Apoyo","Vacunación en el Centro Ambulatorio.","vacuna"]
];
function norm(s){return s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase()}
function buscar(q){q=norm(q.trim());if(!q)return[];return SERVICIOS.filter(function(s){var h=norm(s.join(' '));return q.split(/\s+/).every(function(w){return h.indexOf(w)>-1})})}
// Vistas del prototipo: inicio / ficha
function vistas(){
  var btns=document.querySelectorAll('[data-view]');
  function show(v,keep){
    document.querySelectorAll('[data-page]').forEach(function(p){p.hidden=p.dataset.page!==v});
    btns.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.view===v)});
    document.body.dataset.view=v;
    var t=document.getElementById('mTitle');
    if(t)t.innerHTML=v==='ficha'?'Hemodiálisis<small>Servicio</small>':'Hospital Oñativia<small>Salta</small>';
    try{history.replaceState(null,'',v==='ficha'?'#ficha':'#inicio')}catch(e){}
    if(!keep)window.scrollTo(0,0);
  }
  document.addEventListener('click',function(e){
    var t=e.target.closest('[data-go]');if(!t)return;
    e.preventDefault();show(t.dataset.go);
    var h=t.getAttribute('href');
    if(h&&h.length>1&&h!=='#inicio'&&h!=='#ficha'){var el=document.querySelector(h);if(el&&el.offsetParent!==null)el.scrollIntoView()}
    if(t.classList.contains('mtab')){document.querySelectorAll('.mtab').forEach(function(x){x.setAttribute('aria-current',x===t)})}
  });
  btns.forEach(function(b){b.addEventListener('click',function(){show(b.dataset.view)})});
  show(location.hash==='#ficha'?'ficha':'inicio');
  mobile();
}
function mobile(){
  var open=null,last=null;
  function openS(id){var s=document.getElementById(id);if(!s)return;last=document.activeElement;s.classList.add('open');open=s;document.documentElement.style.overflow='hidden';
    var i=s.querySelector('input');setTimeout(function(){(i||s.querySelector('[data-close].mbtn')).focus()},60);if(i)render()}
  function closeS(){if(!open)return;open.classList.remove('open');open=null;document.documentElement.style.overflow='';if(last&&last.focus)last.focus()}
  document.addEventListener('click',function(e){
    var o=e.target.closest('[data-sheet]');if(o){openS(o.dataset.sheet);return}
    if(open&&e.target.closest('[data-close]'))closeS();
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeS()});
  var q=document.getElementById('mq'),res=document.getElementById('mqRes'),hint=document.getElementById('mqHint');
  if(!q)return;
  function row(s){var f=s[0]==='Hemodiálisis';return '<a class="m-row" href="'+(f?'#ficha" data-go="ficha':'#m-servicios" data-go="inicio')+'" data-close><span class="tx"><b>'+s[0]+'</b><small>'+s[2]+'</small></span><svg class="ic chev"><use href="#ph-caret-right"/></svg></a>'}
  function render(){
    var v=q.value.trim();
    if(!v){hint.textContent='Búsquedas frecuentes';res.hidden=false;res.innerHTML=SERVICIOS.filter(function(s){return /^(Hemodiálisis|Laboratorio Bioquímico|Endocrinología|Vacunatorio|Medicina Nuclear)$/.test(s[0])}).map(row).join('');return}
    var r=buscar(v);
    hint.textContent=r.length?r.length+(r.length===1?' resultado':' resultados'):'No encontramos “'+v+'”. Probá con otra palabra o llamá al 0387 431-5042.';
    res.hidden=!r.length;res.innerHTML=r.map(row).join('');
  }
  q.addEventListener('input',render);
}
