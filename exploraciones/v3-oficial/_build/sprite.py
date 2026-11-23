import sys,os,re
d,out=sys.argv[1],sys.argv[2]
parts=['<svg width="0" height="0" style="position:absolute" aria-hidden="true">']
for f in sorted(os.listdir(d)):
    s=open(os.path.join(d,f)).read()
    inner=re.sub(r'^<svg[^>]*>|</svg>\s*$','',s.strip()).replace('<rect width="256" height="256" fill="none"/>','')
    parts.append('<symbol id="ph-%s" viewBox="0 0 256 256">%s</symbol>'%(f[:-4],inner))
parts.append('</svg>')
open(out,'w').write('\n'.join(parts))
