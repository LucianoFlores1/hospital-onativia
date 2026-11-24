import { useMemo, useState } from 'react';
import type { Categoria, Servicio } from '../data/servicios';

type Item = Pick<Servicio, 'slug' | 'nombre' | 'categoria' | 'resumen' | 'claves' | 'referencia'>;

const CATEGORIAS: Categoria[] = ['Consultas', 'Cirugía', 'Estudios', 'Tratamientos', 'Apoyo'];
const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function Chevron({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor" aria-hidden="true">
      <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z" />
    </svg>
  );
}

export default function Buscador({ servicios, base, conmutador }: { servicios: Item[]; base: string; conmutador: string }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<Categoria | 'Todas'>('Todas');

  const indice = useMemo(() => servicios.map((s) => norm(`${s.nombre} ${s.resumen} ${s.claves} ${s.categoria}`)), [servicios]);
  const visibles = useMemo(() => {
    const palabras = norm(q.trim()).split(/\s+/).filter(Boolean);
    return servicios.filter((s, i) => (cat === 'Todas' || s.categoria === cat) && palabras.every((p) => indice[i].includes(p)));
  }, [q, cat, servicios, indice]);
  const grupos = CATEGORIAS.map((c) => ({ c, items: visibles.filter((s) => s.categoria === c) })).filter((g) => g.items.length);

  return (
    <div>
      {/* Campo de búsqueda */}
      <label htmlFor="buscar" className="sr-only">Buscar una especialidad</label>
      <div className="flex items-center gap-2 rounded-2xl bg-mist px-4 transition-shadow focus-within:shadow-[0_0_0_4px_rgb(29_74_184/0.18)]">
        <svg viewBox="0 0 256 256" className="size-5 shrink-0 text-mute" fill="currentColor" aria-hidden="true">
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
        </svg>
        <input
          id="buscar"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tiroides, diálisis, análisis de sangre…"
          autoComplete="off"
          enterKeyHint="search"
          className="min-w-0 flex-1 bg-transparent py-3.5 text-[17px] text-ink outline-none placeholder:text-mute"
        />
        {q && (
          <button type="button" onClick={() => setQ('')} className="rounded-full px-2 py-1 text-[15px] text-accent">Borrar</button>
        )}
      </div>

      {/* Control segmentado */}
      <div className="-mx-5 mt-4 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
        <div role="group" aria-label="Filtrar por tipo" className="inline-flex gap-1 rounded-full bg-mist p-1">
          {(['Todas', ...CATEGORIAS] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className="shrink-0 rounded-full px-4 py-1.5 text-[15px] font-medium text-ink-2 transition-[background-color,box-shadow,color] duration-200 aria-pressed:bg-white aria-pressed:text-ink aria-pressed:shadow-[0_1px_3px_rgb(0_0_0/0.12)]"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-[13px] text-mute" aria-live="polite">
        {visibles.length === servicios.length ? `${servicios.length} especialidades` : `${visibles.length} de ${servicios.length} especialidades`}
      </p>

      {grupos.length === 0 ? (
        <div className="card mt-3 bg-mist p-6 text-center">
          <p className="text-[19px] font-semibold">No encontramos “{q}”.</p>
          <p className="mt-1 text-mute">Probá con otra palabra o consultá al {conmutador}.</p>
          <button type="button" onClick={() => { setQ(''); setCat('Todas'); }} className="mt-3 text-accent hover:underline">Ver todas las especialidades</button>
        </div>
      ) : (
        grupos.map((g) => (
          <section key={g.c} className="mt-6">
            <h2 className="px-4 pb-2 text-[13px] font-semibold tracking-[0.02em] text-mute uppercase">{g.c}</h2>
            {/* Lista agrupada, como los ajustes de iOS */}
            <ul className="card overflow-hidden bg-mist">
              {g.items.map((s) => (
                <li key={s.slug} className="border-b border-hair/70 last:border-b-0">
                  <a href={`${base}/especialidades/${s.slug}`} className="group flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-black/[.03] active:bg-black/[.06]">
                    <span className="min-w-0 flex-1">
                      <span className="block text-[17px] font-semibold tracking-[-0.015em]">{s.nombre}</span>
                      <span className="block text-[15px] leading-snug text-mute">{s.resumen}</span>
                    </span>
                    <Chevron className="size-4 shrink-0 text-mute" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
