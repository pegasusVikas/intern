import React from 'react'
import Contact from '../contact/Contact'
import ContactForm from '../contact/ContactForm'

const Home = () => {
    return (
        <div className="row">
        <div className="col-6">
            <ContactForm/>
        </div>
        <div className="col-6">
            <Contact/>
        </div>
        </div>
    )
}

export default Home
