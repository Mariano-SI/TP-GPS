import React from 'react'
import { FaqStyled } from './Faq.style'
import QuestionCard from '../../Components/QuestionCard/QuestionCard';

const perguntas = [
  {
    pergunta: 'Qual a diferença entre React e React Native?',
    resposta: 'React é uma biblioteca para construção de interfaces web, enquanto React Native é um framework para construção de aplicativos mobile.'
  },
  {
    pergunta: 'O que é TypeScript?',
    resposta: 'TypeScript é uma linguagem de programação que adiciona tipagem estática ao JavaScript.'
  },
  {
    pergunta: 'O que é Redux?',
    resposta: 'Redux é uma biblioteca para gerenciamento de estado em aplicações JavaScript.'
  },
  {
    pergunta: 'O que é Redux Thunk?',
    resposta: 'Redux Thunk é um middleware para Redux que permite a criação de actions assíncronas.'
  },
  {
    pergunta: 'O que é Redux Saga?',
    resposta: 'Redux Saga é uma biblioteca para Redux que permite a'
  },
  {
    pergunta: 'O que são Hooks no React?',
    resposta: 'Hooks são funções que permitem o uso de estado e outros recursos do React sem a necessidade de escrever uma classe. Eles foram introduzidos no React 16.8.'
  },
  {
    pergunta: 'O que é o Virtual DOM no React?',
    resposta: 'O Virtual DOM é uma representação leve e em memória da árvore de elementos do DOM. O React usa o Virtual DOM para renderizar componentes de forma eficiente, minimizando as alterações no DOM real.'
  },
  {
    pergunta: 'O que é JSX?',
    resposta: 'JSX é uma extensão de sintaxe para JavaScript que permite escrever código semelhante a HTML dentro do código JavaScript. É comumente usado no React para descrever a estrutura e aparência dos componentes.'
  },
  {
    pergunta: 'O que é o ciclo de vida de um componente no React?',
    resposta: 'O ciclo de vida de um componente no React refere-se às diferentes fases pelas quais um componente passa, desde sua criação até sua destruição. Inclui métodos como componentDidMount, componentDidUpdate e componentWillUnmount.'
  },
  {
    pergunta: 'O que é o React Router?',
    resposta: 'O React Router é uma biblioteca popular para navegação em aplicações React. Ele permite definir rotas e renderizar componentes específicos com base na URL do navegador.'
  }
  
]

function Faq() {

  const [selectedQuestion, setSelectedQuestion] = React.useState<number | null>(null);

  function onClickOnCard(index: number){
    if(selectedQuestion === index){
      setSelectedQuestion(null)
      return
    }
    setSelectedQuestion(index)
  }
  return (
    <FaqStyled>
        <h2>FAQ: Suas Dúvidas Respondidas Aqui!</h2>
        <div className='questionsContainer'>
          {perguntas.map(({pergunta, resposta}, index) => (
            <QuestionCard 
              question={pergunta}
              answer={resposta}
              openCard={selectedQuestion === index}
              onClick={() => onClickOnCard(index)}
            />
          ))}
        </div>
    </FaqStyled>
  )
}

export default Faq