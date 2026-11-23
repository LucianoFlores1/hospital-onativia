import re
for k in 'abc':
    p=k+'.html'; s=open(p,encoding='utf-8').read()
    if 'MHOME' in s: continue
    s=s.replace('<main data-page="inicio">','<main data-page="inicio" class="d-only">',1)
    s=s.replace('<main data-page="ficha"','<!--MHOME-->\n\n<main data-page="ficha"',1)
    s=s.replace('<header class="hd">','<header class="hd d-only">',1)
    s=s.replace('<nav class="nav" aria-label','<nav class="nav d-only" aria-label',1)
    s=re.sub(r'<footer class="ft"',r'<footer class="ft d-only"',s,count=1)
    s=s.replace('</style>','</style>\n<style>/*MOBILE*/\n/*MCSS*/</style>',1)
    s=s.replace('  vistas();','  vistas();\n/*MJS*/',1)
    for t in ('MHOME','MOBILE','MJS','d-only'): assert t in s,(k,t)
    open(p,'w',encoding='utf-8').write(s)
print('ok')
