import React, { useEffect } from 'react'
import { FaqStyled } from './Faq.style'
import QuestionCard from '../../Components/QuestionCard/QuestionCard';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import SearchWithoutResult from '../../Components/QuestionCard/SearchWithoutResult/SearchWithoutResult';

const perguntas = [
  {
    tema: 'Empresa Júnior',
    pergunta: 'O que a empresa júnior faz?',
    resposta: 'A Next Step é uma empresa, no entanto, por estar vinculada à universidade, tem caráter educativo. Apesar disso, oferecemos serviços e cobramos por eles. A Next Step, sendo parte do curso de Sistemas de Informação, atua no desenvolvimento de sistemas, sites em geral e no gerenciamento de mídias sociais.'
  },
  {
    tema: 'Empresa Júnior',
    pergunta: 'É preciso ter experiência ou saber programar para participar da empresa Júnior?',
    resposta: 'Não. A ideia da EJ é proporcionar a primeira vivência empresarial aos estudantes, por isso, não cobramos experiência prévia nem conhecimentos em programação.'
  },
  {
    tema: 'Empresa Júnior',
    pergunta: 'Como faço para entrar?',
    resposta: 'Recorrentemente, são abertas inscrições para o processo seletivo, no mínimo uma vez ao ano. Cada vaga possui seus próprios métodos avaliativos, definidos pela empresa. Saiba mais acompanhando o perfil no Instagram: @nextstep.ej'
  },
  {
    tema: 'Empresa Júnior',
    pergunta: 'Você recebe bolsa ou remuneração ao participar?',
    resposta: 'Não. Todo trabalho realizado na empresa júnior é voluntário, conforme previsto em lei. Todo o dinheiro arrecadado é destinado à manutenção da EJ e reinvestido nos membros por meio de capacitações, viagens e contatos.'
  },
  {
    tema: 'Empresa Júnior',
    pergunta: 'Por onde posso entrar em contato com os responsáveis pela Empresa Júnior?',
    resposta: 'Para entrar em contato com a Next Step, você pode enviar uma mensagem direta no Instagram @nextstep.ej ou enviar um e-mail para next.step@ufvjm.edu.br'
  },
  /* estagio */
  {
    tema: 'Estágio',
    pergunta: 'Quais documentos devem ser confeccionados para validar o estágio?',
    resposta: 'Os documentos variam conforme o tipo de estágio. Para ambos os tipos, os documentos necessários estão presentes em: http://www.decom.ufvjm.edu.br/dc2020/?page_id=21'
  },
  {
    tema: 'Estágio',
    pergunta: 'Quem assina cada documento?',
    resposta: 'Os próprios documentos indicam quem deve assinar aquele documento.'
  },
  {
    tema: 'Estágio',
    pergunta: 'O meu estágio é obrigatório ou não-obrigatório?',
    resposta: 'Obrigatório: está cursando a disciplina de estágio. Não obrigatório: estágio realizado após ou antes da disciplina de estágio obrigatório.'
  },
  {
    tema: 'Estágio',
    pergunta: 'Quem deve ser o professor supervisor?',
    resposta: 'Qualquer professor do curso pode supervisionar o estágio, no entanto, é ideal que o professor tenha uma familiaridade com a área estagiado, a fim de que ele consiga avaliar o aluno.'
  },
  {
    tema: 'Estágio',
    pergunta: 'Que professor é o coordenador de estágio? ',
    resposta:` A disciplina de estágio possui um professor e um coordenador.
O Coordenador de estágios é o responsável pela organização geral dos estágios obrigatórios e não obrigatórios. É ele quem assina o Termo de Compromisso de Estágio pala UFVJM. O professor da disciplina de estágio é responsável pela organização do calendário, acompanhamento da documentação somente dos estágios obrigatórios. E há o professor orientador que é responsável por acompanhar e assinar o plano de estágio. Tanto coordenador como professor podem mudar em cada semestre. Os nomes e contatos dos atuais responsáveis estão disponíveis no site do DECOM.`

  },
  /* Pesquisa e Extensáo */
  {
    tema: 'Pesquisa e Extensão',
    pergunta: 'O que é a iniciação científica?',
    resposta: 'A iniciação científica é um programa acadêmico que visa introduzir os estudantes ao universo da pesquisa. Os alunos desenvolvem projetos sob a orientação de professores, aprendendo métodos científicos e contribuindo para a produção de conhecimento.'
  },
  {
    tema: 'Pesquisa e Extensão',
    pergunta: 'A iniciação científica é remunerada?',
    resposta: 'Depende. Existem bolsas oferecidas por agências de fomento, como o CNPq e a CAPES, e também pela própria instituição. Além disso, alguns programas não remuneram, mas ainda assim oferecem experiência acadêmica valiosa.'
  },
  {
    tema: 'Pesquisa e Extensão',
    pergunta: 'O que são projetos de extensão universitária?',
    resposta: 'Projetos de extensão são atividades realizadas pela universidade para interagir com a comunidade externa, promovendo a aplicação prática do conhecimento acadêmico para atender às demandas sociais.'
  },
  {
    tema: 'Pesquisa e Extensão',
    pergunta: 'Qual a diferença entre iniciação científica e extensão?',
    resposta: 'A iniciação científica foca na pesquisa acadêmica e na produção de conhecimento científico. Já os projetos de extensão têm como objetivo aplicar o conhecimento para resolver problemas reais da comunidade e promover ações educativas, culturais ou sociais.'
  },
  {
    tema: 'Pesquisa e Extensão',
    pergunta: 'Participar de iniciação científica ou extensão conta como horas complementares?',
    resposta: 'Sim, podendo ser utilizadas por até 120 horas.'
  },
  /* Liga Acadêmica ByteBuilders */
  {
    tema: 'Pesquisa e Extensão',
    pergunta: 'O que é a Liga Acadêmica ByteBuilders?',
    resposta: 'A ByteBuilders é uma iniciativa estudantil para preencher lacunas curriculares no curso de Sistemas de Informação. A ideia que motivou a sua conceituação e posteriormente implementação foi a necessidade de realizar mais atividades práticas de forma coletiva para consolidar o conhecimento teórico e até mesmo áreas de conhecimento que não estão na grade curricular atualmente. Portanto a Liga Acadêmica ByteBuilders é uma entidade voltada a realizar atividades práticas, eventos e interação social dos seus membros e associados (desde estudantes do curso de sistemas a colaboradores internos e externos como empresas parceiras).'
  },
  {
    tema: 'Pesquisa e Extensão',
    pergunta: 'Qual seu principal objetivo?',
    resposta: 'O principal objetivo da ByteBuilders é permitir a autonomia estudantil na conceitualização, elaboração, implementação e gestão de projetos acadêmicos (práticos e/ou teóriocos). Além de estimular os seus membros a terem pro-atividade de buscar conhecimento (principalmente prático) fora do escopo da grade curricular resultando em um aprendizado coletivo e colaborativo. '
  },
  {
    tema: 'Pesquisa e Extensão',
    pergunta: 'Como fazer parte?',
    resposta: 'Para fazer parte da ByteBuilders é preciso fazer a inscrição para alguns de seus projetos, através de um processo seletivo. Os processos seletivos ocorrem a cada semestre, geralmente no inicio do semestre.'
  },
  {
    tema: 'Pesquisa e Extensão',
    pergunta: 'Quais os projetos são desenvolvidos nela?',
    resposta: `Atualmente existem os seguintes projetos:
      - Time de Programação: o objetivo deste projeto é treinar e capacidade os alunos do curso de sistemas para participar de campeonatos de programação promovidos pela SBC (Sociedade Brasileira de Computação).
      - Projeto de Robótica: o objetivo deste projeto é a robótica com foco na industria 4.0, que vai desde automação de processos a controle de remoto de robôs. 
      - Guildas: as guildas são mais generalistas, temos a guilda de desenvolvimento web (que foca em ensinar os participantes sobre como desenvolver sistemas web estruturados, atualmente utilizando a linguagem Python com o framework Django), e temos também a guilda de gamedev, que foca em ensinar os participantes sobre o desenvolvimento de jogos, atualmente estão utilizando o fremework unity.
`
  },
  /* Projeto Orientado - TCC */
  
  {
    tema: 'Projeto Orientado - TCC',
    pergunta: 'O que é o TCC?',
    resposta: 'O Trabalho de Conclusão de Curso (TCC) é uma atividade acadêmica obrigatória que consiste na sistematização, registro e apresentação de conhecimentos culturais, científicos e técnicos, produzidos na área do Curso, como resultado do trabalho de pesquisa, investigação científica e extensão. O TCC tem por finalidade estimular a curiosidade e o espírito questionador do acadêmico, fundamentais para o desenvolvimento da ciência.'
  },
  {
    tema: 'Projeto Orientado - TCC',
    pergunta: 'Posso matricular na disciplina sem ter definido um orientador para o meu TCC?',
    resposta: 'Sim. Mas é preciso definir o orientador o mais rápido possível. Há diversas atividades que deverão ser concluídas no semestre e o professor responsável pela disciplina de Projeto Orientado I segue o calendário como em qualquer outra matéria.'
  },
  {
    tema: 'Projeto Orientado - TCC',
    pergunta: 'Como saber a área de pesquisa de cada docente e o tema que ela queira trabalhar?',
    resposta: 'No site do DECOM está disponibilizada a área de pesquisa e temas de interesse de cada professor. No entanto, há possibilidade de aluno e orientador definirem outros temas de interesse comum.'
  },
  /* Atlética The Bug */
  {
    tema: 'Atlética The Bug',
    pergunta: 'O que é a Atlética?',
    resposta: 'A The Bug é a Atlética do curso de Sistemas de Informação da Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM). Uma atlética é uma associação estudantil que tem como objetivo promover a prática esportiva e a integração entre os estudantes do curso. Ela é responsável por organizar eventos esportivos, treinos e competições, além de representar o curso em campeonatos universitários e outros eventos esportivos.'
  },
  {
    tema: 'Atlética The Bug',
    pergunta: 'O que ela faz?',
    resposta: 'A The Bug, sendo a Atlética do curso de Sistemas de Informação da UFVJM, realiza diversas atividades para promover a integração e o engajamento dos estudantes. Algumas das principais ações da The Bug incluem: organização de festas, organização de eventos esportivos, participação de competições universitárias, produção de acessórios  e roupas do curso.'
  },
  {
    tema: 'Atlética The Bug',
    pergunta: 'Como é possível ser membro?',
    resposta: 'Todos os anos a The Bug realiza um processo seletivo para novos membros. Os interessados devem ficar atentos às redes sociais da Atlética para saber quando as inscrições serão abertas.'
  },
  {
    tema: 'Atlética The Bug',
    pergunta: 'O que é ser associado? Como se tornar um?',
    resposta: 'Membros associados são aqueles que pagam por uma taxa de associção semestral com o intuíto de conseguir benefícios ofertados pela The Bug, como por exemplo, desconto em festas, itens e eventos. Para se tornar um membro associado você deve ficar atento às redes sociais da Atlética para saber quando as inscrições serão abertas.'
  },
  {
    tema: 'Atlética The Bug',
    pergunta: 'Quais produtos e ações ela faz?',
    resposta: 'A the Bug sempre busca trazer novos itens a cada lançamento, porém alguns intens sempre são garantidos como camisetas, moletons, meias e é claro canecas!!'
  },
  {
    tema: 'Atlética The Bug',
    pergunta: 'Comumente, quantas vezes ao ano a Atlética lança produtos?',
    resposta: 'Comumente, a Atlética lança produtos duas vezes ao ano, uma no início do primeiro semestre e outra no início do segundo semestre, com os tipos de itens podendo variar dependendo da estação ou tendência do momento.'
  },
  /* Dúvidas Gerais */
  {
    tema: 'Dúvidas Gerais',
    pergunta: 'Onde fazer a matrícula para as matérias do curso?',
    resposta: 'Se você está no primeiro semestre, a matrícula é feita automaticamente. Caso contrário, deve-se acessar o e-campus.'
  },
  {
    tema: 'Dúvidas Gerais',
    pergunta: 'Como ingressar no curso de Sistemas?',
    resposta: 'As formas mais comuns de ingresso são pela seleção do SISU e SASI. Para mais informações, acesse http://www.ufvjm.edu.br/prograd/formas-de-ingresso.html'
  },
  {
    tema: 'Dúvidas Gerais',
    pergunta: 'Qual o professor responsável pelo DECOM?',
    resposta: 'O DECOM possui um coordenador (e vice) de curso e um chefe (e vice) de departamento. O coordenador é responsável pela estrutura pedagógica e questões relativas às aulas, alunos e professores. O chefe de departamento é responsável pela administração do departamento, como gerenciamento de recursos financeiros e manutenção das instalações. A cada dois anos estas funções são designadas a novos professores por meio de eleições departamentais. Os nomes dos atuais coordenador e chefe e seus respectivos vices estão disponíveis no site do DECOM.'
  },
  {
    tema: 'Dúvidas Gerais',
    pergunta: 'Quais são os grupos de pesquisa e quais professores são responsáveis por eles?',
    resposta: 'Informações sobre grupos de pesquisa, assim como de projetos de extensão estão disponíveis no site do DECOM.'
  },
  
]

function Faq() {

  const [selectedQuestion, setSelectedQuestion] = React.useState<number | null>(null);
  const [questions, setQuestions] = React.useState(perguntas)
  const [search, setSearch] = React.useState<string>('')

  function onClickOnCard(index: number){
    if(selectedQuestion === index){
      setSelectedQuestion(null)
      return
    }
    setSelectedQuestion(index)
  }

  useEffect(() =>{
    if(search === ''){
      setQuestions(perguntas)
      return
    }
    const filteredQuestions = perguntas.filter(({pergunta, tema}) => pergunta.toLowerCase().includes(search.toLowerCase()) || tema.toLowerCase().includes(search.toLowerCase()))
    setQuestions(filteredQuestions)
  }, [search])

  function decideContent(){
    if(questions.length === 0){
      return <SearchWithoutResult/>
    }
    return questions.map(({tema, pergunta, resposta}, index) => (
      <QuestionCard 
        key={index}
        theme={tema}
        question={pergunta}
        answer={resposta}
        openCard={selectedQuestion === index}
        onClick={() => onClickOnCard(index)}
      />
    ))
  }

  return (
    <FaqStyled>
        <h2>FAQ: Suas Dúvidas Respondidas Aqui!</h2>
        <div className='inputAndButton'>
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Pesquise sua dúvida ou tema aqui...'
          />
          <div onClick={() => setSearch('')}><ClearRoundedIcon/></div>
        </div>
        <div className='questionsContainer'>
          {decideContent()}
        </div>
        <footer className='footer'>
          Não achou sua dúvida? Envie-a por <a href="https://forms.gle/fJE8G4doitWzfeZx9" target='_blank'>aqui</a>.
        </footer>
    </FaqStyled>
  )
}

export default Faq