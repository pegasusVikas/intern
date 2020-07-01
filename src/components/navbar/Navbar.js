import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({title,icon}) => {
    return (
        <div className="bg-info px-3">
        <h1>
            <i className={icon}/> {title}
        </h1>    
        </div>
    )
}


Navbar.prototypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:'Contact Keeper',
    icon:'far fa-id-card'
}

export default Navbar
