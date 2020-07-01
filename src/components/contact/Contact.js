import React,{useContext} from 'react'
import contactContext from '../context/contact/ContactContext'
import ContactItem from './ContactItem'

const Contact = () => {
    const context = useContext(contactContext);
    const {contacts} =context;
    return (
        <div>
            {contacts.map((item)=><ContactItem contact={item}/>)}
        </div>
    )
}

export default Contact
