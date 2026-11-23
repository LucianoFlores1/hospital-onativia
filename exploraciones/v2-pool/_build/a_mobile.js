  (function(){
    var g={};SERVICIOS.forEach(function(s){var l=norm(s[0])[0].toUpperCase();(g[l]=g[l]||[]).push(s)});
    var nav='',out='';
    Object.keys(g).sort().forEach(function(l){
      nav+='<a href="#maz-'+l+'">'+l+'</a>';
      out+='<div class="a-letter" id="maz-'+l+'"><h3>'+l+'</h3><div class="m-group">'+g[l].map(function(s){var f=s[0]==='Hemodiálisis';return '<a class="m-row" href="'+(f?'#ficha" data-go="ficha':'#maz-'+l)+'"><span class="tx"><b>'+s[0]+'</b><small>'+s[2]+'</small></span><svg class="ic chev"><use href="#ph-caret-right"/></svg></a>'}).join('')+'</div></div>';
    });
    document.getElementById('mAzNav').innerHTML=nav;document.getElementById('mAz').innerHTML=out;
  })();
