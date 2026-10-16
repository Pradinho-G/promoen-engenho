export default function Sobre() {
  return (
    <main className="min-h-screen bg-white px-6 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">

        {/* CABEÇALHO */}
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-700">
            Sobre o projeto
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            PROMOEN ENGENHO
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Conheça melhor o projeto, seus objetivos e a proposta
            desenvolvida pelos estudantes do curso de Química.
          </p>
        </div>

        {/* O QUE É */}
        <section className="mt-16 grid items-center gap-10 md:grid-cols-2">

          <div>
            <span className="font-semibold text-blue-700">
              O que é?
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Conhecimento que transforma
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Uma ideia de iniciação científica que virou um projeto de monitoria 
            e deu origem a uma revista digital que se transformou em um livro
            de divulgação científica com pesquisas em cosmetologia aplicada 
            e em educação aplicada, sempre abordando a sustentabilidade em
            todos os seus aspectos EESG e os 17 ODS do pacto global da agenda 2030 da ONU.
            Eu costumo pedir aos grupos de alunos que elaboram trabalho oral de PRIT, 
            versão final, que coloquem depois das considerações finais,
            os agradecimentos, as proposições de continuidade de pesquisa e as proposições de ações empreendedoras. 
            Sendo assim vou fazer o mesmo nessa mensagem final.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
               Quero agradecer os gestores da FIEB por permitirem que a unidade do Engenho continue 
            sendo um polo de produção científica, com um elevado número de mestres,
            doutores, pós doutores e professores tocadores de projetos,
            aproveito também para agradecer os gestores da nossa unidade, PRISCILA CABRAL, FERNANDO CUSTÓDIO, Denis e Rosi, 
            que tanto nos ajudaram a desenvolver projetoS,  ações e eventos afins, e ainda agradecer aos 56 monitores que participaram do projeto DE 2024 A 2026 e contribuíram para o seu sucesso. 
            Como proposta de continuidade, espero que o projeto seja desenvolvido NOS anos seguintes, 
            visto que os resultados já alcançados foram plenamente satisfatórios e as perspectivas futuras sugerem
            que estamos caminhando para a excelência a passos largos.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              No tocante a ações empreendedoras,
            os monitores focaram as suas pesquisaras em fontes confiáveis, 
            especialmente sobre formulações COM TECNOLOGIA verde, 
            levando em conta todos os aspectos EESG (Ambiente, ECONÔMICO, Social e Governança)
             e os 17 ODS (Objetivos de Desenvolvimento Sustentável) da Agenda 2030 da ONU,
              o que sugere ações empreendedoras sustentáveis, principalmente nos trabalhos de PRIT, que contribuem com a melhoria da vida no planeta Terra.
            </p>
          </div>

          {/* LOGO */}
          <div className="flex justify-center">
            <div className="flex h-72 w-72 items-center justify-center rounded-3xl bg-slate-50 p-10 shadow-xl ring-1 ring-slate-200">
              <img
                src="/logo.png"
                alt="Logo PROMOEN ENGENHO"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

        </section>

        {/* OBJETIVOS */}
        <section className="mt-20">

          <div className="text-center">
            <span className="font-semibold uppercase tracking-widest text-blue-700">
              Nossa proposta
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Objetivos do projeto
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {/* CONHECIMENTO */}
            <div className="rounded-3xl bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                🔬
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Conhecimento
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Incentivar a busca pelo conhecimento científico
                e ampliar a compreensão dos conceitos relacionados
                à Química.
              </p>
            </div>

            {/* EDUCAÇÃO */}
            <div className="rounded-3xl bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                🎓
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Educação
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Estimular a aprendizagem por meio da integração
                entre teoria, prática, pesquisa e participação
                dos estudantes.
              </p>
            </div>

            {/* INOVAÇÃO */}
            <div className="rounded-3xl bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                💡
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Inovação
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Estimular a criatividade e o desenvolvimento de
                novas ideias utilizando a ciência como ferramenta
                para criar soluções.
              </p>
            </div>

          </div>

        </section>

        {/* ITB */}
        <section className="mt-20 rounded-3xl bg-blue-700 px-8 py-12 text-center text-white shadow-xl">

          <h2 className="text-3xl font-bold">
            ITB - Maria Sylvia Chaluppe Mello
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            O PROMOEN ENGENHO está relacionado ao curso de Química e ao desenvolvimento de 
            atividades voltadas ao conhecimento, à educação e à inovação.
          </p>

        </section>

        {/* VOLTAR */}
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