import React from 'react'
import { ContactCardStyled } from './ContactCard.style'
import defaultPhoto from '../../../../assets/default.jpg'  
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

interface IContactCardProps{
    name: string
    answerable: string
    phone: string
    email: string
    photo?: string
}

function ContactCard({name, answerable, phone, email, photo}: IContactCardProps) {
  return (
    <ContactCardStyled>
        <div className='cardHeader'>
            <div className='imageContainer'>
                <img src={photo? photo : defaultPhoto} alt="" />
            </div>
            <p className='name'>{name}</p>
            <p className='answerable'>{answerable}</p>
        </div>
        <div className='contactsArea'>
            <div className='iconAndValue'>
                <div className='iconContainer'>
                    <LocalPhoneRoundedIcon/>
                </div>
                <p>{phone}</p>
            </div>
            <div className='iconAndValue'>
                <div className='iconContainer'>
                    <MailRoundedIcon/>
                </div>
                <p>{email}</p>
            </div>
        </div>

    </ContactCardStyled>
  )
}

export default ContactCard