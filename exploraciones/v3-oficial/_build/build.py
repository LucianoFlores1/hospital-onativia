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

# Versión independiente para GitHub Pages (docs/ en la raíz del proyecto)
R=os.path.dirname(os.path.dirname(O))
D=os.path.join(R,'docs')
os.makedirs(D,exist_ok=True)
head=('<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n'
      '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
      '<style>body{margin:0}[hidden]{display:none!important}</style>\n</head>\n<body>\n')
open(os.path.join(D,'index.html'),'w',encoding='utf-8').write(head+s+'\n</body>\n</html>\n')
shutil.copytree(os.path.join(O,'img'),os.path.join(D,'img'),dirs_exist_ok=True)
open(os.path.join(D,'.nojekyll'),'w').close()
print('docs ok')
