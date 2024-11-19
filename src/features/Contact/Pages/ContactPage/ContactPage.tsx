import React from 'react'
import { ContactPageStyled } from './ContactPage.style'
import ContactCard from '../../Components/ContactCard/ContactCard'


const contacts = [
    {
        contactName: 'Coordenador',
        answerable: 'Nome do Professor',
        phone: '11 9999-9999',
        email:'professor@ufvjm.',
        photo:''
    },
    {
        contactName: 'Coordenador',
        answerable: 'Nome do Professor',
        phone: '11 9999-9999',
        email:'professor@ufvjm.',
        photo:''
    },
    {
        contactName: 'Coordenador',
        answerable: 'Nome do Professor',
        phone: '11 9999-9999',
        email:'professor@ufvjm.',
        photo:''
    },
    {
        contactName: 'Coordenador',
        answerable: 'Nome do Professor',
        phone: '11 9999-9999',
        email:'professor@ufvjm.',
        photo:''
    },
    {
        contactName: 'Coordenador',
        answerable: 'Nome do Professor',
        phone: '11 9999-9999',
        email:'professor@ufvjm.',
        photo:''
    },
    {
        contactName: 'Coordenador',
        answerable: 'Nome do Professor',
        phone: '11 9999-9999',
        email:'professor@ufvjm.',
        photo:''
    },
    {
        contactName: 'Coordenador',
        answerable: 'Nome do Professor',
        phone: '11 9999-9999',
        email:'professor@ufvjm.',
        photo:''
    },
]

function ContactPage({}: Props) {
  return (
    <ContactPageStyled>
        <h2>Gostaria de falar diretamente ?</h2>
        <div className='contactsContainer'>
            {contacts.map((contact, index) => (
                <ContactCard
                    key={index}
                    name={contact.contactName}
                    answerable={contact.answerable}
                    phone={contact.phone}
                    email={contact.email}
                    photo={contact.photo}
                />
            ))}
        </div>
    </ContactPageStyled>
  )
}

export default ContactPage