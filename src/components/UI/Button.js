import React from 'react'

const Button = ({name,onButtonClick}) =>{

    return (
        <button onClick={onButtonClick}>{name}</button>
    )

}

export default Button ;