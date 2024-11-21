import React from 'react'
import { SearchWithoutResultStyled } from './SearchWithoutResult.style'
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';



function SearchWithoutResult() {
  return (
    <SearchWithoutResultStyled>
        <p>Não encontramos nenhum resultado para o termo buscado.</p>
        <SentimentDissatisfiedRoundedIcon className="icon"/>
        <p>Que tal enviar sua dúvida por <a href="https://forms.gle/fJE8G4doitWzfeZx9" target='_blank'>aqui</a>?</p>
    </SearchWithoutResultStyled>
  )
}

export default SearchWithoutResult