import os,re,shutil
B=os.path.dirname(os.path.abspath(__file__)); O=os.path.dirname(B)
rd=lambda f:open(os.path.join(B,f),encoding='utf-8').read()
s=rd('page.html')
shared=rd('shared.js').replace('Hemodiálisis<small>Servicio</small>','Nefrología<small>Especialidad</small>')
s=s.replace('<!--SPRITE-->',rd('sprite.html')).replace('<!--MSHELL-->',rd('mshell.html')).replace('<!--MHOME-->',rd('mhome.html'))
s=s.replace('/*MOBILE*/',rd('mobile.css')).replace('/*MCSS*/',rd('mobile-skin.css')).replace('/*SHARED*/',shared).replace('/*MJS*/','')
vis=re.sub(r'<style>.*?</style>|<script>.*?</script>','',s,flags=re.S)
for ch in ('—','–'):
    if ch in vis: print('DASH',repr(ch))
open(os.path.join(O,'index.html'),'w',encoding='utf-8').write(s)
print('ok',len(s)//1024,'KB')
