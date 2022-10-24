import React, { useState } from 'react'
import { FaTimes, FaCheck } from 'react-icons/fa';

import './ToggleSwitch.scss';

const ToggleSwitch = (props) => {
    const {
        defaultChecked,
        onChange
    } = props

    const [toggle, setToggle] = useState(defaultChecked || false);

    const triggerToggle = () => {
        setToggle( !toggle )
        onChange(!toggle);
    }
    
    return (
        <div onClick={triggerToggle} className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}>
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                    <span><FaTimes/></span>
                </div>
                <div className="wrg-toggle-uncheck">
                    <span><FaCheck color='lime'/></span>
                </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button"/>
        </div>
    )
}

export default ToggleSwitch;