
import { QuestionCardStyled } from './QuestionCard.style'
import AddIcon from '@mui/icons-material/Add';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface IAwswerCardProps{
  question: string,
  answer: string,
  openCard: boolean,
  theme: string,
  onClick: () => void
}

function QuestionCard({question, answer, theme, openCard, onClick}: IAwswerCardProps) {
  return (
    <QuestionCardStyled onClick={onClick}>
      <div>
        <p className='theme'>{theme}</p>
        <div className='cardHeader'>
          <p>{question}</p>
          {openCard ? <CloseRoundedIcon className="icon"/> : <AddIcon className="icon"/>}
        </div>
      </div>
      {openCard && 
        <p className='answer'>{answer}</p>
      }

    </QuestionCardStyled>
  )
}

export default QuestionCard