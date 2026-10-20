const publicacoes = [
  {
    numero: 'MATERIAL 0',
    titulo: 'Normas de Segurança',
    data: 'Material de segurança',
    descricao: 'Orientações importantes para a segurança nas atividades e nos ambientes de laboratório.',
    pdf: '/revistas/normas-seguranca.pdf',
    capa: '/revistas/normas-seguranca.jpg',
  },
  {
    numero: 'EDIÇÃO 1',
    titulo: 'Revista Digital PROMOEN',
    data: 'Outubro de 2024',
    descricao: 'Primeira edição da revista digital produzida no âmbito do Projeto de Monitoria do Engenho Novo.',
    pdf: '/revistas/edicao-1-outubro-2024.pdf',
    capa: '/revistas/edicao-1-outubro-2024.jpg',
  },
  {
    numero: 'EDIÇÃO 2',
    titulo: 'A Nova Era dos Cosméticos',
    data: '1º trimestre de 2025',
    descricao: 'Uma edição dedicada à inovação, à sustentabilidade e às novas tecnologias na indústria cosmética.',
    pdf: '/revistas/edicao-2-nova-era-cosmeticos.pdf',
    capa: '/revistas/edicao-2-nova-era-cosmeticos.jpg',
  },
  {
    numero: 'EDIÇÃO 3',
    titulo: 'A Química dos Alimentos Funcionais',
    data: '2º trimestre de 2025',
    descricao: 'Conteúdos sobre alimentos funcionais, compostos bioativos e sua relação com a alimentação.',
    pdf: '/revistas/edicao-3-alimentos-funcionais.pdf',
    capa: '/revistas/edicao-3-alimentos-funcionais.jpg',
  },
  {
    numero: 'EDIÇÃO 4',
    titulo: 'Saúde e Bem-Estar',
    data: '3º trimestre de 2025',
    descricao: 'Uma publicação sobre a contribuição da química para a saúde e o bem-estar.',
    pdf: '/revistas/edicao-4-saude-bem-estar.pdf',
    capa: '/revistas/edicao-4-saude-bem-estar.jpg',
  },
  {
    numero: 'EDIÇÃO 5',
    titulo: 'Biotecnologia',
    data: '1º trimestre de 2026',
    descricao: 'Exemplos de como a biotecnologia pode contribuir para cosméticos mais sustentáveis.',
    pdf: '/revistas/edicao-5-biotecnologia.pdf',
    capa: '/revistas/edicao-5-biotecnologia.jpg',
  },
  {
    numero: 'EDIÇÃO 6',
    titulo: 'Ingredientes Inovadores',
    data: '2º trimestre de 2026',
    descricao: 'A ascensão dos bioativos brasileiros no mercado global e suas aplicações.',
    pdf: '/revistas/edicao-6-ingredientes-inovadores.pdf',
    capa: '/revistas/edicao-6-ingredientes-inovadores.jpg',
  },
]

export default function Revistas() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50 px-5 pb-20 pt-32 sm:px-6">
      <section className="mx-auto max-w-7xl">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.22em] text-blue-700">Biblioteca PROMOEN</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Nossas <span className="text-blue-700">publicações</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Consulte os materiais de segurança e explore as revistas produzidas pelo PROMOEN ENGENHO.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {publicacoes.map((item) => (
            <article key={item.numero} className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-64 items-center justify-center overflow-hidden bg-slate-100 p-4">
                <img src={item.capa} alt={`Capa: ${item.titulo}`} className="h-full w-auto max-w-full rounded-lg object-contain shadow-md transition duration-300 group-hover:scale-[1.02]" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-700">{item.numero}</span>
                <h2 className="mt-4 text-xl font-bold leading-snug text-slate-900">{item.titulo}</h2>
                <p className="mt-2 text-sm font-medium text-slate-500">{item.data}</p>
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{item.descricao}</p>
                <a href={item.pdf} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
                  Ler publicação <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="/" className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">← Voltar para o início</a>
        </div>
      </section>
    </main>
  )
}
