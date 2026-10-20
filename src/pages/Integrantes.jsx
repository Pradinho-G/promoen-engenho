import { useMemo, useState } from 'react'

const monitores = [
  { nome: "Ana Clara Belini", turma: "QUI1BT", inicio: "2026", horas: "7" },
  { nome: "Ana Luiza Ferreira Lopes", turma: "QUI2CT", inicio: "2026", horas: "4" },
  { nome: "Annelise Alves Paz", turma: "QUI3AM", inicio: "2026", horas: "7" },
  { nome: "Eduarda Delgado Ribeiro", turma: "QUI3DM", inicio: "2026", horas: "7" },
  { nome: "Eduarda Freire de Sousa", turma: "QUI3AM", inicio: "2026", horas: "7" },
  { nome: "Eduarda Santos", turma: "QUI3BM", inicio: "2026", horas: "3" },
  { nome: "Emilyn Costa Cesna", turma: "QUI2AT", inicio: "2026", horas: "7" },
  { nome: "Guilherme Prado", turma: "QUI2CT", inicio: "2026", horas: "7" },
  { nome: "Hannah Alice P. Olinda", turma: "QUI1AT", inicio: "2026", horas: "7" },
  { nome: "Hillary de Souza Costa", turma: "QUI1BT", inicio: "2026", horas: "7" },
  { nome: "Isabella Lancellotti", turma: "QUI3CT", inicio: "2024", horas: "7" },
  { nome: "Isabelle Felix da Silva", turma: "QUI1CT", inicio: "2026", horas: "7" },
  { nome: "Julia Heloysa", turma: "FAR2BM", inicio: "2026", horas: "7" },
  { nome: "Julia Klenk", turma: "QUI1AT", inicio: "2026", horas: "7" },
  { nome: "Julia Nonata Santos", turma: "QUI3CT", inicio: "2024", horas: "3" },
  { nome: "Kimberly Luciana Rosa Washington", turma: "QUI2AT", inicio: "2026", horas: "7" },
  { nome: "Lavínea Christine de Souza", turma: "QUI2CT", inicio: "2025", horas: "Assessoria Home Office" },
  { nome: "Luca Arcanjo Voltatoni", turma: "QUI3AM", inicio: "2026", horas: "7" },
  { nome: "Maria Beatriz", turma: "QUI1AT", inicio: "2026", horas: "7" },
  { nome: "Maria Eduarda Medina", turma: "QUI2DT", inicio: "2026", horas: "4" },
  { nome: "Maria Eduarda Melo Souza", turma: "ACL2AM", inicio: "2026", horas: "7" },
  { nome: "Maryna Antonino", turma: "QUI1AT", inicio: "2026", horas: "7" },
  { nome: "Mellyssa Freitas Silva", turma: "FAR3AM", inicio: "2025", horas: "7" },
  { nome: "Nicolly Gabrielly", turma: "FAR1AT", inicio: "2026", horas: "7" },
  { nome: "Norah Eulália Freire Serra", turma: "FAR2CM", inicio: "2026", horas: "7" },
  { nome: "Sophia Araújo Jesus da Silva", turma: "QUI2DT", inicio: "2025", horas: "4" },
  { nome: "Stephanie Diniz", turma: "QUI2CT", inicio: "2026", horas: "7" },
  { nome: "Taylla de Paulo Verly Reis", turma: "QUI1CT", inicio: "2026", horas: "7" },
  { nome: "Tosiek Raviel Siqueira de Jesus", turma: "FAR3BM", inicio: "2025", horas: "7" }
]

export default function Integrantes() {
  const [busca, setBusca] = useState('')

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLocaleLowerCase('pt-BR')

    if (!termo) return monitores

    return monitores.filter((p) =>
      `${p.nome} ${p.turma}`
        .toLocaleLowerCase('pt-BR')
        .includes(termo)
    )
  }, [busca])

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-slate-50 to-white px-5 pb-20 pt-32 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Cabeçalho */}
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.22em] text-blue-700">
            Nossa equipe
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Integrantes <span className="text-blue-700">PROMOEN</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Conheça o professor responsável e os monitores ativos do
            Projeto de Monitoria do Engenho Novo.
          </p>

          <div className="mt-7 inline-flex rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-semibold text-blue-800 shadow-sm">
            {monitores.length} monitores ativos
          </div>
        </header>

        {/* Professor responsável */}
        <section
          aria-labelledby="responsavel-promoen"
          className="mx-auto mb-12 max-w-4xl"
        >
          <article className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-900 p-7 text-white shadow-xl sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-12 h-52 w-52 rounded-full border-[28px] border-white/10"
            />

            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">

              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-3xl font-extrabold tracking-wider text-white shadow-inner">
                EO
              </div>

              <div className="min-w-0">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
                  Professor responsável
                </span>

                <h2
                  id="responsavel-promoen"
                  className="mt-3 text-2xl font-extrabold sm:text-3xl"
                >
                  Edison José Orsi
                </h2>

                <p className="mt-2 text-sm font-semibold text-blue-100 sm:text-base">
                  Organizador do PROMOEN
                </p>

                <p className="mt-1 text-sm text-blue-200">
                  Projeto de Monitoria do Engenho Novo
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-50/90 sm:text-base">
                  Professor responsável pela organização e orientação
                  do PROMOEN, acompanhando as atividades do projeto
                  e a equipe de monitores.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* Busca */}
        <section aria-label="Buscar monitores" className="mx-auto mb-8 max-w-xl">
          <label
            htmlFor="busca-monitor"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Buscar por nome ou turma
          </label>

          <input
            id="busca-monitor"
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Digite um nome ou turma..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          />
        </section>

        {/* Lista de monitores */}
        <section aria-label="Lista de monitores">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Nossos monitores
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Relação referente ao 3º trimestre de 2026.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtrados.map((p) => (
              <article
                key={p.nome}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-800">
                  {p.nome
                    .split(/\s+/)
                    .slice(0, 2)
                    .map((parte) => parte[0])
                    .join('')
                    .toUpperCase()}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="break-words font-bold leading-snug text-slate-900">
                    {p.nome}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                      {p.turma}
                    </span>

                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                      Desde {p.inicio}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-500">
                    {p.horas === 'Assessoria Home Office'
                      ? p.horas
                      : `${p.horas} h/a`}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filtrados.length === 0 && (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
              Nenhum monitor encontrado. Tente outro nome ou turma.
            </p>
          )}
        </section>

        {/* Voltar */}
        <div className="mt-14 text-center">
          <a
            href="/"
            className="inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            ← Voltar para o início
          </a>
        </div>
      </div>
    </main>
  )
}
