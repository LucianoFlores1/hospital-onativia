import re
p='index.html';s=open(p,encoding='utf-8').read()
for k in 'abc':
    K=k.upper()
    old='<img src="img/thumb-%s.jpg" alt="Captura del inicio de la propuesta %s" width="1000" height="694">'%(k,K)
    new='<div class="shots"><img class="dk" src="img/thumb-%s.jpg" alt="Captura en escritorio de la propuesta %s" width="1000" height="694"><img class="ph" src="img/mob-%s.jpg" alt="Captura en celular de la propuesta %s" width="390" height="780" loading="lazy"></div>'%(k,K,k,K)
    assert old in s,k; s=s.replace(old,new)
css='''.shots{position:relative;border-right:1px solid var(--line);background:var(--bg);min-height:100%}
.shots .dk{width:100%;height:100%;object-fit:cover;object-position:top left;aspect-ratio:10/7;max-width:100%;display:block}
.shots .ph{position:absolute;right:16px;bottom:16px;width:30%;max-width:170px;height:auto;border-radius:18px;border:5px solid #111;box-shadow:0 2px 4px rgba(0,0,0,.12),0 16px 32px -8px rgba(0,0,0,.35)}
@media (max-width:860px){.shots{border-right:0;border-bottom:1px solid var(--line)}}
</style>'''
s=s.replace('</style>',css,1)
s=s.replace('navegables en escritorio y celular.','navegables. En celular cada una tiene estructura de app: barra de pestañas, buscador y menú en hojas deslizables y una barra fija para llamar al 148. Para verlas así, abrilas desde el teléfono o achicá la ventana.')
open(p,'w',encoding='utf-8').write(s)
print('ok')
