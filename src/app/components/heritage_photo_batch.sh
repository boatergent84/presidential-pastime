#!/usr/bin/env bash
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
python3 - <<'PY'
from pathlib import Path
import re
p=Path('src/app/heritage-collection/page.tsx')
if not p.exists(): raise SystemExit('ERROR: Heritage gallery page not found')
s=p.read_text()
if 'heritagePhotoForExhibit' in s:
 print('Gallery photo upgrade already installed; nothing changed.')
 raise SystemExit(0)
assets=Path('public')
if not assets.is_dir(): raise SystemExit('ERROR: public folder missing')
# Images that already exist in the repository; no downloads or invented artifacts.
images=[]
for f in assets.rglob('*'):
 if f.is_file() and f.suffix.lower() in ('.jpg','.jpeg','.png','.webp'):
  images.append('/'+f.relative_to(assets).as_posix())
images.sort()
# Embed only a small list of image paths, and match conservatively.
import json
image_json=json.dumps(images,ensure_ascii=False)
helper='''\n// Archive gallery images: uses only files actually present in /public.\nconst availableArchiveImages: string[] = __IMAGE_LIST__;\nconst imageName = (path: string) => path.split('/').pop()?.toLowerCase() ?? '';\nfunction heritagePhotoForExhibit(e: (typeof exhibits)[number]): {src:string; reference:boolean} | null {\n  if (e.image) return {src:e.image, reference:false};\n  // Only match a specific president's name/slug; never imply the image is the artifact.\n  const slug = String(e.presidentSlug || '').toLowerCase();\n  if (!slug || slug === 'multiple' || slug === 'various') return null;\n  const candidates = availableArchiveImages.filter(path => {\n    const name = imageName(path);\n    return name.startsWith(slug + '-') || name === slug + '.jpg' || name === slug + '.webp' || name === slug + '.png';\n  });\n  if (!candidates.length) return null;\n  const preferred = candidates.find(path => /first-pitch|baseball|ballgame|opening-day|world-series|stadium/.test(imageName(path))) || candidates[0];\n  return {src:preferred, reference:true};\n}\n'''.replace('__IMAGE_LIST__',image_json)
anchor='const categories ='
if anchor not in s: raise SystemExit('ERROR: gallery structure differs; no files changed')
s=s.replace(anchor,helper+'\n'+anchor,1)
old='{e.image?<img src={e.image} alt={e.title} className="h-full w-full object-contain"/>:<span className="px-5 text-center font-serif text-2xl text-[#c9b98c]">{e.category}</span>}'
new='''{(() => { const photo = heritagePhotoForExhibit(e); return photo ? <div className="relative h-full w-full"><img src={photo.src} alt={photo.reference ? `Historical reference photograph associated with ${e.president}; not a photograph of the listed artifact` : e.title} className="h-full w-full object-contain"/>{photo.reference && <span className="absolute bottom-0 left-0 right-0 bg-[#102c44]/90 px-2 py-1 text-center text-[10px] text-white">Historical reference photo · not the artifact</span>}</div> : <span className="px-5 text-center font-serif text-2xl text-[#c9b98c]">{e.category}</span>; })()}'''
if old not in s: raise SystemExit('ERROR: gallery image markup differs; no files changed')
s=s.replace(old,new,1)
p.write_text(s)
print(f'Updated gallery. Found {len(images)} local photographs available for conservative matching.')
print('Existing exhibit images take priority; other photos are explicitly labeled historical reference photos.')
PY
npm run build
printf '\nSUCCESS: Heritage photo batch build passed. Preview /heritage-collection\n'
