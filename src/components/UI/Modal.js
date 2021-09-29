import React from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

function Modal(props) {

    const BackDrop = () =>{
        return <div className={classes.backdrop}></div>
    }
    const ModalOverlay =(props) =>{
        return(
        <div className={classes.content}>
            <div className={classes.modal}>
                {props.children}
            </div>
        </div>)
    }

    const portalDiv =document.getElementById("overlay")
    return (
        <>
            {ReactDOM.createPortal(<BackDrop />,portalDiv)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalDiv)}
        </>
    )
}

export default Modal


