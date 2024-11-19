import React from 'react'
import { QuestionCardStyled } from './QuestionCard.style'
import AddIcon from '@mui/icons-material/Add';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface IAwswerCardProps{
  question: string,
  answer: string,
  openCard: boolean,
  onClick: () => void
}

function QuestionCard({question, answer, openCard, onClick}: IAwswerCardProps) {
  return (
    <QuestionCardStyled onClick={onClick}>
      <div className='cardHeader'>
        <p>{question}</p>
        {openCard ? <CloseRoundedIcon className="icon"/> : <AddIcon className="icon"/>}
      </div>
      {openCard && 
        <p className='answer'>{answer}</p>
      }

    </QuestionCardStyled>
  )
}

export default QuestionCard