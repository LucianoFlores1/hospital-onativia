import json,collections
d=json.load(open('_build/detect.json',encoding='utf-8'))
b=lambda f:f.replace(chr(92),'/').split('/')[-1]
print(len(d),collections.Counter((b(x['file']),x['antipattern']) for x in d))
for x in d:
    if x['antipattern']!='low-contrast': print(b(x['file']),x['antipattern'],x.get('snippet','')[:140])
