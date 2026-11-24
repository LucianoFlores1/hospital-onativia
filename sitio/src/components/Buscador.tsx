import { useMemo, useState } from 'react';
import type { Categoria, Servicio } from '../data/servicios';

type Item = Pick<Servicio, 'slug' | 'nombre' | 'categoria' | 'resumen' | 'claves' | 'referencia'>;

const CATEGORIAS: Categoria[] = ['Consultas', 'Cirugía', 'Estudios', 'Tratamientos', 'Apoyo'];

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

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
      <label htmlFor="buscar" className="sr-only">Buscar una especialidad</label>
      <div className="plate flex items-center gap-3 border-2 border-sign bg-white px-4 focus-within:ring-4 focus-within:ring-sign-tint">
        <svg viewBox="0 0 256 256" className="size-6 shrink-0 text-sign" fill="currentColor" aria-hidden="true">
          <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" />
        </svg>
        <input
          id="buscar"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tiroides, diálisis, análisis de sangre…"
          autoComplete="off"
          enterKeyHint="search"
          className="min-w-0 flex-1 bg-transparent py-4 text-lg text-ink outline-none placeholder:text-steel"
        />
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]" role="group" aria-label="Filtrar por tipo">
        {(['Todas', ...CATEGORIAS] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className="press plate shrink-0 border border-rule bg-white px-4 py-2 font-display text-[17px] font-semibold tracking-wide uppercase text-steel select-none aria-pressed:border-sign aria-pressed:bg-sign aria-pressed:text-white"
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-6 text-[15px] text-steel" aria-live="polite">
        {visibles.length === servicios.length ? `${servicios.length} especialidades` : `${visibles.length} de ${servicios.length} especialidades`}
      </p>

      {grupos.length === 0 ? (
        <div className="plate mt-4 border border-rule bg-paper p-6">
          <p className="font-semibold">No encontramos “{q}”.</p>
          <p className="mt-1 text-steel">Probá con otra palabra o consultá al {conmutador}.</p>
          <button type="button" onClick={() => { setQ(''); setCat('Todas'); }} className="mt-3 font-semibold text-sign underline underline-offset-4">Ver todas las especialidades</button>
        </div>
      ) : (
        grupos.map((g) => (
          <section key={g.c} className="mt-8">
            <h2 className="sign-text border-b-4 border-sign pb-2 text-[28px] text-sign">{g.c}</h2>
            <ul className="divide-y divide-rule">
              {g.items.map((s) => (
                <li key={s.slug}>
                  <a href={`${base}/especialidades/${s.slug}`} className="group flex items-center gap-4 py-4">
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-semibold group-hover:text-sign group-hover:underline">{s.nombre}</span>
                      <span className="block text-[15px] text-steel">{s.resumen}</span>
                      {s.referencia && <span className="plate mt-2 inline-block bg-cross-tint px-2 py-0.5 text-[13px] font-semibold text-cross-deep">{s.referencia}</span>}
                    </span>
                    <svg viewBox="0 0 256 256" className="size-6 shrink-0 text-sign transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" aria-hidden="true">
                      <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                    </svg>
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
