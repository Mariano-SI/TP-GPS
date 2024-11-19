import React from 'react'
import { HomeStyled } from './Home.style'
import studentsImage from '../../../../assets/students-edital-1024x683.jpg'



function Home() {
  return (
    <HomeStyled>
        <div className='contentContainer'>
            <div className="imageContainer">
                <img src={studentsImage} alt="" />
            </div>
            <div className='introductionContainer'>
                <div className='titleAndContent'>
                    <h2>FAQ: Suas Dúvidas Respondidas Aqui!</h2>
                    <p>Seja bem-vindo(a) à nossa Central de Ajuda! Aqui você encontra respostas rápidas e fáceis para as perguntas mais frequentes.</p>
                </div>
                <div className='titleAndContent'>
                    <h2>Como usar o FAQ?</h2>
                    <p>É simples!</p>
                    <ol>
                        <li>Navegue pelas categorias: Explore as categorias de perguntas para encontrar o tema relacionado à sua dúvida.</li>
                        <li>Encontre sua resposta: Clique na pergunta que mais se aproxima da sua dúvida e veja a resposta completa.</li>

                    </ol>
                </div>
                <div className='titleAndContent'>
                    <h2>Ainda com dúvidas?</h2>
                    <p>Se não encontrar a resposta que procura, não hesite em nos contatar! Nossa equipe de suporte está pronta para te ajudar.</p>
                </div>
            </div>
        </div>
    </HomeStyled>
  )
}

export default Home