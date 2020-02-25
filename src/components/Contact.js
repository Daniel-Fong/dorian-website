import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import NavBar from './NavBar'

class Contact extends React.Component {
    render () {
        return (
            <section className='contact-section'>
                <header>
                    <NavBar />
                </header>
                <ul className='contact-ul'>
                    <h1 className='dorian-h1'>Dorian Krausz</h1>
                    <li id='email-li'>
                        <a href='mailto:doriankrausz92@gmail.com' subject='Inquiry from Website'>
                        <MdEmail alt='Email Icon linking to email' size={70} className='icon'/>
                        </a>
                        <p>doriankrausz92@gmail.com</p>
                    </li>
                    <li id='linked-in-li'>
                        <a href='https://www.linkedin.com/in/dorian-krausz-a9611838/' target='blank'>
                        <FaLinkedin alt='LinkedIn Icon linking to LinkedIn' size={70} className='icon' />
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Contact;