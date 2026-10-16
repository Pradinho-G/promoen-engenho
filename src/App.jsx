import Navbar from './components/Navbar'
import FlipCard from './components/FlipCard'
import Integrantes from './pages/Integrantes'
import Sobre from './pages/Sobre'
import Revistas from './pages/Revistas'

export default function App() {
  const currentPath = window.location.pathname

  const isIntegrantesPage = currentPath === '/integrantes'
  const isSobrePage = currentPath === '/sobre'
  const isRevistasPage = currentPath === '/revistas'

  // PÁGINA DE INTEGRANTES
  if (isIntegrantesPage) {
    return (
      <div className="min-h-screen bg-white text-slate-800">
        <Navbar />
        <Integrantes />
      </div>
    )
  }

  // PÁGINA REVISTAS
  if (isRevistasPage) {
    return (
      <div className="min-h-screen bg-white text-slate-800">
        <Navbar />
        <Revistas />
      </div>
    )
  }

  // PÁGINA SOBRE
  if (isSobrePage) {
    return (
      <div className="min-h-screen bg-white text-slate-800">
        <Navbar />
        <Sobre />
      </div>
    )
  }

  // PÁGINA INICIAL
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <main>

        {/* HERO */}
        <section
          id="inicio"
          className="flex min-h-screen items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 pb-16 pt-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

            <div className="animate-fade-up">

              <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Projeto de Química
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                Conhecimento que{' '}
                <span className="text-blue-700">
                  transforma.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Bem-vindo ao PROMOEN ENGENHO, um projeto que
                conecta química, educação e inovação para
                estimular o conhecimento e a criatividade.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="/sobre"
                  className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
                >
                  Conheça o projeto
                </a>

              </div>

            </div>

            {/* LOGO */}
            <div className="flex justify-center animate-float">

              <div className="flex h-80 w-80 items-center justify-center rounded-full bg-white p-8 shadow-2xl ring-8 ring-blue-100 md:h-96 md:w-96">

                <img
                  src="/logo.png"
                  alt="Logo PROMOEN ENGENHO"
                  className="h-auto max-h-full w-full object-contain"
                />

              </div>

            </div>

          </div>
        </section>

        {/* SOBRE O PROJETO */}
        <section
          id="sobre"
          className="bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-5xl text-center">

            <span className="font-semibold uppercase tracking-widest text-blue-700">
              Sobre o projeto
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              O que é o PROMOEN ENGENHO?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Em breve, adicionaremos aqui a descrição oficial
              do projeto, seus objetivos e suas principais
              características.
            </p>

            <a
              href="/sobre"
              className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Saiba mais →
            </a>

          </div>
        </section>

        {/* NOSSOS PILARES */}
        <section className="bg-slate-50 px-6 py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">

              <span className="font-semibold uppercase tracking-widest text-blue-700">
                Nossos pilares
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Química, Educação e Inovação
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Conheça os pilares que orientam o desenvolvimento
                do projeto PROMOEN ENGENHO.
              </p>

            </div>

            <div className="grid gap-8 md:grid-cols-3">

              <FlipCard
                icon="⚗️"
                title="Química"
                description="A química está presente em diferentes aspectos da nossa vida. Por meio dela, estudamos a matéria, suas transformações e propriedades. O projeto estimula a aplicação dos conhecimentos químicos na prática. Também incentiva a experimentação e o pensamento científico."
              />

              <FlipCard
                icon="📚"
                title="Educação"
                description="A educação é fundamental para construir conhecimento e desenvolver novas habilidades. O projeto incentiva o aprendizado colaborativo e a troca de experiências. Busca aproximar a teoria das atividades práticas e valoriza a curiosidade, a participação e o pensamento crítico."
              />

              <FlipCard
                icon="💡"
                title="Inovação"
                description="A inovação permite encontrar novas maneiras de resolver problemas e criar possibilidades. O projeto incentiva a criatividade e o desenvolvimento de ideias. Estimula a pesquisa, a tecnologia e a melhoria contínua para transformar aprendizados em novas soluções."
              />

            </div>

          </div>

        </section>

        {/* NOSSA EQUIPE */}
        <section
          id="integrantes"
          className="bg-white px-6 py-20"
        >

          <div className="mx-auto max-w-6xl text-center">

            <span className="font-semibold uppercase tracking-widest text-blue-700">
              Nossa equipe
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Integrantes do projeto
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Conheça os estudantes que fazem parte do
              PROMOEN ENGENHO.
            </p>

            <a
              href="/integrantes"
              className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Conhecer integrantes →
            </a>

          </div>

        </section>

      </main>

      {/* RODAPÉ */}
      <footer className="bg-slate-900 px-6 py-8 text-center text-white">

        <img
          src="/logo.png"
          alt="Logo PROMOEN ENGENHO"
          className="mx-auto mb-4 h-16 w-auto object-contain"
        />

        <p className="text-sm text-slate-300">
          PROMOEN ENGENHO — Química, Educação e Inovação.
        </p>

        <p className="mt-2 text-xs text-slate-400">
          ITB - Maria Sylvia Chaluppe Mello
        </p>

      </footer>

    </div>
  )
}