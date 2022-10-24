import React from 'react'

import './DropDown.scss';

const DropDown = (props) => {
    const {
        isOpen,
        leftOrRight,
        width,
        isArrow 
    } = props

    return isOpen && (
            <div className={`dropdownContainer ${leftOrRight} ${isArrow === 'On' ? 'arrowOn' : ''}`} style={{width : width}}>
                {props.children}
            </div>
        )
}

export default DropDown;