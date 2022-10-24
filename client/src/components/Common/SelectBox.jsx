import React, {useState, useRef, useEffect} from 'react'
import { FiChevronDown } from 'react-icons/fi';
import DropDown from './DropDown';

import './SelectBox.scss';

const SelectBox = (props) => {
    const { text, dropWidth, width, className, isMultiSelect } = props
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const buttonRef = useRef(null);

    useEffect(() => {
        window.addEventListener('click', handleOutClick);
        return () => window.removeEventListener('click', handleOutClick);
    },[dropdownIsOpen])

    const handleOutClick = (e) => {
        if (buttonRef.current?.contains(e.target)) return
        setDropdownIsOpen(false);
    }

    return (
            <div ref={buttonRef} 
                className={`inputBox cursorPointer p-relative ${className}`} 
                style={{width : width}} 
                onClick={()=>setDropdownIsOpen(isMultiSelect ? true : !dropdownIsOpen)}
            >
                <div className="textElipse">{text}</div>
                <FiChevronDown className='dropIcon font20'
                    style={{transform : dropdownIsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />

                <DropDown
                    isOpen = {dropdownIsOpen}
                    leftOrRight = 'left'
                    width = {dropWidth}
                    isArrow = 'off'
                >
                    {props.children}
                </DropDown>

            </div>
        )
}

export default SelectBox;