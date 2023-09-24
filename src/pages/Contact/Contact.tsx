import { ContactForm } from './components/ContactForm'

import './Contact.scss'

export const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='contact-title'>Contactez-moi</h1>
      <ContactForm />
    </div>
  )
}
