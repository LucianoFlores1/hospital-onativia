  (function(){
    var out=document.getElementById('cRes'),t='ref';
    function run(){
      var l=t==='ref'?SERVICIOS.filter(function(s){return /referencia|nico/.test(s[2])}):SERVICIOS.filter(function(s){return s[1]===t});
      out.innerHTML=l.map(function(s){var f=s[0]==='Hemodiálisis';return '<a class="m-row" href="'+(f?'#ficha" data-go="ficha':'#m-servicios')+'"><span class="tx"><b>'+s[0]+'</b><small>'+s[2]+'</small></span><svg class="ic chev"><use href="#ph-caret-right"/></svg></a>'}).join('');
    }
    document.querySelectorAll('#cChips .m-chip').forEach(function(b){b.addEventListener('click',function(){t=b.dataset.t;document.querySelectorAll('#cChips .m-chip').forEach(function(x){x.setAttribute('aria-pressed',x===b)});run()})});
    run();
  })();
