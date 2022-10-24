import React, {useState, useEffect, useRef} from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import DropDown from '../Common/DropDown';
import Constant from '../../Constant';

import './HomeType.scss';

const HomeType = (props) => {
    const { 
        filterStatus, 
        setFilterStatus
    } = props

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const [selectAll, setSelectAll] = useState(true);
    const buttonRef = useRef(null)

    const handleOutClick = (e) => {
        if (buttonRef.current.contains(e.target)) return
        setDropdownIsOpen(false);
    }

    useEffect(() => {
        window.addEventListener('click', handleOutClick);
        return () => window.removeEventListener('click', handleOutClick);
    },[dropdownIsOpen])

    const handleClickDone = () => {
        setDropdownIsOpen(false);
    }

    const handleClickSelect = () => {
        setSelectAll(!selectAll);
        if(selectAll){
            setFilterStatus({
                ...filterStatus,
                propertyType : []
            })
        } else {
            setFilterStatus({
                ...filterStatus,
                propertyType : [...Constant.initPropertyType]
            })
        }
    }

    const handleClickHomeTypeCheck = (e) => {
        const myObj = { ...filterStatus }
        if(myObj.propertyType.includes(e.target.value)){
            myObj.propertyType.splice(myObj.propertyType.indexOf(e.target.value), 1)
        } else {
            myObj.propertyType.push(e.target.value);
        }
        setFilterStatus(myObj);
    }

    return (
        <div className='filterOne responsiveNone' ref={buttonRef}>
            <div className='filterBtn grayOutlineBtn' onClick={()=>setDropdownIsOpen(!dropdownIsOpen)}>Home Type</div>
            <DropDown
                isOpen = {dropdownIsOpen}
                leftOrRight = 'right'
                width = '300px'
                isArrow = 'On'
            >
                <div className='homeTypeMain'>
                    <div className='borderBottom mb1'>
                        <div className='filterItemTitle'>Home Type</div>
                        <div className='alignCenter mb1' onClick={handleClickSelect}>
                            <BsCheckCircleFill color='#006aff' size='20'/>
                            <span className='selectAllOrNot'>
                                { selectAll ? 'Deselect All' : 'Select All' }
                            </span>
                        </div>
                    </div>
                    { Constant.initPropertyType.map((item, i) => {
                        return(
                            <div className='homeTypeItem' key={i}>
                                <input type='checkbox' value={item} id={'homeTypeCheck'+i} className='mr10' onChange={handleClickHomeTypeCheck}
                                    checked ={ filterStatus.propertyType.includes(item) ? true : false }
                                />
                                <label htmlFor={'homeTypeCheck'+i}>{item}</label>
                            </div>
                        )
                    }) }
                </div>
                <div className='dropdownFooter'>
                    <div className='btn whiteBtn' onClick={handleClickDone}>Done</div>
                </div>
            </DropDown>
        </div>
    )
}

export default HomeType;