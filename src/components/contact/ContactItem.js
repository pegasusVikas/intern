import React,{useContext} from 'react'
import ContactContext from '../context/contact/ContactContext'

const ContactItem = ({contact}) => {
    const contactContext =useContext(ContactContext);
    const {id,name,email,phone,type} = contact;

    const onDelete = ()=>{
        contactContext.deleteContact(id);
        contactContext.clearCurrent(id);
    }

    const onEdit=()=>{
        contactContext.setCurrent(contact);
    }
    return (
        <div className="card bg-light my-2 pad2y px-1">
            <h3 className="text-primary text-left"> {name}{' '}
            <span className={"my-1 float-right badge badge-"+(type=='personal'?"primary":"success")}> {type.charAt(0).toUpperCase()+type.slice(1)}</span>
            </h3>
            <ul className="list-inline">
            {email&&<li><i class="fas fa-envelope-open-text"/> {email}</li>}
            {phone&&<li><i class="fas fa-phone"> {phone}</i></li>}
            </ul>
            <div className="row py-1">
            <div className="btn-group col-4" role="group" aria-label="basic example">
            <button className="btn btn-dark btn-sm " onClick={onEdit}>edit</button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>delete</button>
            </div>
            </div>

        </div>
    )
}

export default ContactItem
