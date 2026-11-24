# Rediseño web Hospital Dr. Arturo Oñativia

Propuesta de rediseño de https://www.hospitalonativia.gob.ar (Salta, Argentina).

## Ver la propuesta

- Sitio publicado (escritorio y celular): https://lucianoflores1.github.io/hospital-onativia/
- El sitio está en `sitio/` (Astro 6, Tailwind 4 y React para el buscador). Cada push a `main` lo publica con GitHub Actions.
- Desarrollo local: `cd sitio && npm install && npm run dev`.

## Estructura

- `investigacion/auditoria-sitio-actual.md`: todo lo que está roto, desactualizado o falta en el sitio actual.
- `investigacion/inventario-contenido.md`: datos reales del hospital ordenados por tema, con la lista de datos que hay que pedirle al hospital.
- `investigacion/sitio-actual/`: texto completo de las 25 páginas del sitio actual (fuente de verdad del contenido).
- `assets/fotos-hospital/`: fotos y logo descargados del sitio actual.
- `assets/fotos-prensa-salta/`: fotos del hospital tomadas de notas de Prensa del Gobierno de Salta. Pedir originales y permiso antes de publicar el sitio real.
- `sitio/`: el sitio en Astro. Contenido en `sitio/src/data/servicios.ts`, fotos en `sitio/src/assets/fotos/`.
- `exploraciones/`: propuestas de diseño anteriores en HTML. `v1-descartada/` no sirve como dirección visual; ver `POR-QUE-SE-DESCARTO.md`.

## Estado

- 19/11/2026: relevamiento completo del sitio. v1 de diseño rechazada por genérica.
- 22/11/2026: pool v2 con tres direcciones (`exploraciones/v2-pool/`), rechazado por poco visual.
- 23/11/2026: v3 con fotos reales y logo (`exploraciones/v3-oficial/`). No convenció.
- 24/11/2026: migración a Astro con dirección de señalización hospitalaria (directorio de entrada, placas de puerta).
