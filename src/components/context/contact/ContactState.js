import React,{useReducer} from 'react'
import ContactContext from './ContactContext'
import contactReducer from './contactReducer'
import {v4 as uuid} from 'uuid'
import {
SET_CURRENT,
ADD_CONTACT,
DELETE_CONTACT,
UPDATE_CONTACT,
CLEAR_CURRENT,
FILTER_CONTACT,
CLEAR_FILTER
} from '../types'

const ContactState = (props) => {
    const initialState ={
        contacts:[
            {
                id:1,
                name:'vikas',
                email:'vikasvik934@gmail.com',
                phone:'111-111-1111',
                type:'personal'
            },
            {
                id:2,
                name:'HOD',
                email:'HOD@gmail.com',
                type:'professional'
            },
            {
                id:3,
                name:'vardhan',
                phone:'22-122-1221',
                type:'personal'
            }
        ],
        current:null
    }

    const [state,dispatch] = useReducer(contactReducer,initialState)

    //ADD CONTACT
    const addContact =(contact)=>{
        contact.id= uuid()
        dispatch({type:ADD_CONTACT,payload:contact})
    }

    //DELETE CONTACT
    const deleteContact =(id)=>{
        dispatch({type:DELETE_CONTACT,payload:id})
    }

    //SET CURRENT
    const setCurrent =(contact)=>{
        dispatch({type:SET_CURRENT,payload:contact})
    }

    //CLEAR CURRENT
    const clearCurrent =(id)=>{
        dispatch({type:CLEAR_CURRENT,payload:id})
    }

    //UPDATE CONTACT
    const updateContact=(contact)=>{
        dispatch({type:UPDATE_CONTACT,payload:contact})
    }

    return (
        <ContactContext.Provider
        value={{
            contacts:state.contacts,
            current:state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact
        }}
        >
        {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState
