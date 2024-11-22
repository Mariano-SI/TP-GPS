import React from 'react'
import { ContactPageStyled } from './ContactPage.style'
import ContactCard from '../../Components/ContactCard/ContactCard'


const contacts = [ 
    { contactName: 'Chefe de Departamento', answerable: 'Dr. Rafael Santin', phone: null, email: 'chefia.decom@ufvjm.edu.br', photo: '' },
    { contactName: 'Vice Chefe', answerable: 'Dr. Eduardo Pelli', phone: null, email: 'chefia.decom@ufvjm.edu.br', photo: null }, 
    { contactName: 'Coordenador', answerable: 'Dr. André Luiz Covre', phone: null, email: 'coordenacaosi@ufvjm.edu.br', photo: null }, 
    { contactName: 'Coordenador', answerable: 'Dr. André Luiz Covre', phone: null, email: 'andre.covre@ufvjm.edu.br', photo: null }, 
    { contactName: 'Vice coordenador', answerable: 'Leonardo Lana de Carvalho', phone: null, email: 'lanadecarvalholeonardo@gmail.com', photo: null }, { contactName: 'Secretário', answerable: 'Evandro das Mercês Amorim', phone: '(38) 3532-1223', email: 'secretaria.si@ufvjm.edu.br', photo: null } 
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