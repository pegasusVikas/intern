import React,{useState,useContext, useEffect} from 'react'
import ContactContext from '../context/contact/ContactContext'

const ContactForm = () => {
    const contactContext =useContext(ContactContext)
    const {addContact,current,clearCurrent,updateContact} =contactContext
    useEffect(()=>{
    if(current)
    setContact(current)
    else
    setContact({
        name:"",
        email:"",
        phone:"",
        type:"personal"
    })    
    },[current])

    const [contact,setContact]=useState({
        name:"",
        email:"",
        phone:"",
        type:"personal"
    })
    const {name,email,phone,type} =contact;

    const onChange =(e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }

    const onSubmit = e =>{
        e.preventDefault();
        if(current)
        {
            updateContact(contact);
            clearCurrent(current.id); 
        }else{
        addContact(contact);
        setContact({
            name:"",
            email:"",
            phone:"",
            type:"personal" 
        })
        }
    }
    const clear=()=>{
        clearCurrent(current.id);
    }
    return (
        <form onSubmit={onSubmit}>
            <h1 className="text-primary">Add Contact</h1>
            <input
            className="form-control"
            type="text"
            placeholder="Name"
            name="name"
            onChange={onChange}
            value={name}
            /><br/>
            <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
            value={email}
            /><br/>
            <input
            className="form-control"
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={onChange}
            value={phone}
            /><br/>
            
            <ul className="list-group list-group-horizontal">
            <li className="list-group-item"><span>Contact Type:</span></li>
            <li className="list-group-item"><input
            type="radio"
            name="type"
            onChange={onChange}
            checked={type=="personal"}
            value="personal"
            /> Personal</li>
            <li className="list-group-item"><input
            type="radio"
            name="type"
            onChange={onChange}
            checked={type!="personal"}
            value="professional"
            /> Professional</li>
            </ul>
            <div className="my-1">
            <input type="submit" value={current?"Update contact":"Add contact"} className="btn-primary btn-block form-control"/>
            {current&&<input type="button" value="Cancel" className="btn-light btn-block form-control" onClick={clear}/>}
            </div>
            
        </form>
        
    )
}

export default ContactForm
