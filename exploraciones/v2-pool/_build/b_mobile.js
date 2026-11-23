  (function(){
    var cats=[["Especialidad","stethoscope","Especialidades"],["Cirugía","heartbeat","Cirugía"],["Diagnóstico","microscope","Diagnóstico y estudios"],["Tratamiento","drop","Tratamiento"],["Apoyo","hand-heart","Apoyo al paciente"]];
    document.getElementById('mAreas').innerHTML=cats.map(function(c,i){
      var l=SERVICIOS.filter(function(s){return s[1]===c[0]});
      return '<details'+(i===0?' open':'')+'><summary><span class="mi" style="width:32px;height:32px;border-radius:8px;background:var(--green-tint);color:var(--green);display:grid;place-items:center"><svg class="ic" style="width:20px;height:20px"><use href="#ph-'+c[1]+'"/></svg></span>'+c[2]+'<span class="n">'+l.length+'</span><svg class="ic chev"><use href="#ph-caret-down"/></svg></summary><div>'+l.map(function(s){var f=s[0]==='Hemodiálisis';return '<a class="m-row" href="'+(f?'#ficha" data-go="ficha':'#m-servicios')+'"><span class="tx"><b>'+s[0]+'</b><small>'+s[2]+'</small></span><svg class="ic chev"><use href="#ph-caret-right"/></svg></a>'}).join('')+'</div></details>';
    }).join('');
  })();
