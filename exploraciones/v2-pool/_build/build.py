import io,os,re
B=os.path.dirname(os.path.abspath(__file__)); O=os.path.dirname(B)
mcss=open(os.path.join(B,'mobile.css'),encoding='utf-8').read()
mshell=open(os.path.join(B,'mshell.html'),encoding='utf-8').read()
sprite=open(os.path.join(B,'sprite.html'),encoding='utf-8').read()
shared=open(os.path.join(B,'shared.js'),encoding='utf-8').read()
rd=lambda f:open(os.path.join(B,f),encoding='utf-8').read()
names={'A':'Guía de atención','B':'Portal provincial','C':'Centro de referencia'}
def proto(k):
    return '''<style>
.pbar{position:relative;z-index:100;background:#111;color:#eee;font:500 13px/1.3 system-ui,-apple-system,"Segoe UI",sans-serif}
.pbar>div{max-width:1240px;margin-inline:auto;padding:8px 16px;display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center}
.pbar a{color:#9fe0c7}
.pbar b{color:#fff}
.pbar .seg{display:inline-flex;background:#2a2a2a;border-radius:8px;padding:2px;margin-left:auto}
.pbar .seg button{font:inherit;color:#ccc;background:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer}
.pbar .seg button[aria-pressed="true"]{background:#fff;color:#111}
.pbar .lg{display:inline-flex;align-items:center;gap:6px;color:#bbb}
.pbar .lg i{width:18px;border-bottom:2px dotted #F5B400}
@media (max-width:640px){.pbar .lg{display:none}}
</style>
<div class="pbar" role="region" aria-label="Controles del prototipo"><div>
<a href="index.html">Todas las propuestas</a><span><b>Propuesta %s:</b> %s</span><span class="lg"><i></i>Dato a confirmar</span>
<span class="seg" role="group" aria-label="Página"><button data-view="inicio" aria-pressed="true">Inicio</button><button data-view="ficha" aria-pressed="false">Ficha de servicio</button></span>
</div></div>''' % (k,names[k])
for k in 'abc':
    s=open(os.path.join(B,k+'.html'),encoding='utf-8').read()
    s=s.replace('<!--PROTO:%s-->'%k.upper(),proto(k.upper())).replace('<!--SPRITE-->',sprite+mshell).replace('/*MOBILE*/',mcss).replace('/*SHARED*/',shared).replace('<!--MHOME-->',rd(k+'_mobile.html')).replace('/*MCSS*/',rd(k+'_mobile.css')).replace('/*MJS*/',rd(k+'_mobile.js'))
    bad=[c for c in ('\u2014','\u2013') if c in re.sub(r'<style>.*?</style>|<script>.*?</script>','',s,flags=re.S)]
    if bad: print('DASH in',k,bad)
    open(os.path.join(O,'propuesta-'+k+'.html'),'w',encoding='utf-8').write(s)
print('ok')
