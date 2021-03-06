import {
    SET_CURRENT,
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    CLEAR_CURRENT,
    FILTER_CONTACT,
    CLEAR_FILTER
    } from '../types'
export default (state,action)=>{
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts:[...state.contacts,action.payload]
            }
        case DELETE_CONTACT:
            return{
                ...state,
                contacts:state.contacts.filter(({id})=>id!==action.payload)
            }
        case SET_CURRENT:
            return{
                ...state,
                current:action.payload
            }
        case CLEAR_CURRENT:
            return{
                ...state,
                current:state.current?(state.current.id==action.payload?null:(state.current)):null
            }
        case UPDATE_CONTACT:{
            return{
                ...state,
                contacts:state.contacts.map((contact)=>contact.id==action.payload.id?action.payload:contact)
            }
        }
        default:
            return;
    }
}