import React, {useState, useEffect, useRef} from 'react';
import DropDown from '../Common/DropDown';

import './BedsAndBaths.scss';

const BedsAndBaths = (props) => {
    const { 
        filterStatus, 
        setFilterStatus
    } = props

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const buttonRef = useRef(null)

    const handleOutClick = (e) => {
        if (buttonRef.current.contains(e.target)) return
        setDropdownIsOpen(false);
    }

    useEffect(() => {
        window.addEventListener('click', handleOutClick);
        return () => window.removeEventListener('click', handleOutClick);
    },[dropdownIsOpen])

    const handleChangeExact = (e) => {
        setFilterStatus({
            ...filterStatus,
            exactBedrooms : e.target.checked
        })
    }

    const handleChangeBed = (v) => {
        setFilterStatus({
            ...filterStatus,
            bedrooms : v
        })
    }

    const handleChangeBath = (v) => {
        setFilterStatus({
            ...filterStatus,
            baths : v
        })
    }

    useEffect(() => {
        if(filterStatus?.exactBedrooms===false){
            delete filterStatus.exactBedrooms
            setFilterStatus(filterStatus);
        }
        if(filterStatus?.bedrooms===0){
            delete filterStatus.bedrooms
            setFilterStatus(filterStatus);
        }
        if(filterStatus?.baths===0){
            delete filterStatus.baths
            setFilterStatus(filterStatus);
        }
    }, [filterStatus, setFilterStatus])

    const handleClickDone = () => {
        setDropdownIsOpen(false);
    }

    const getDesignValue = (filterStatus) => {
        const res = { text: 'Beds & Baths', color: 'rgb(180, 180, 180)' }

        if(filterStatus?.exactBedrooms){
            if(filterStatus?.bedrooms){
                res.text= filterStatus?.bedrooms+ ' bd, ' + (filterStatus?.baths ? filterStatus.baths : '0') + '+ ba'
            } else {
                res.text= 'Studio, ' + (filterStatus?.baths ? filterStatus.baths : '0') + '+ ba'
            }
            res.color = 'rgb(0, 79, 190)'
        } else {
            if(filterStatus?.bedrooms || filterStatus?.baths){
                res.text= (filterStatus?.bedrooms ? filterStatus.bedrooms : '0') + '+ bd, ' + (filterStatus?.baths ? filterStatus.baths : '0') + '+ ba'
                res.color = 'rgb(0, 79, 190)'
            }
        }
        return res;
    }


    return (
        <div className='filterOne responsiveNone' ref={buttonRef}>
            <div className='filterBtn grayOutlineBtn' onClick={()=>setDropdownIsOpen(!dropdownIsOpen)} style={{ borderColor : getDesignValue(filterStatus).color }}>
                { getDesignValue(filterStatus).text }
            </div>
            <DropDown
                isOpen = {dropdownIsOpen}
                leftOrRight = 'left'
                width = '400px'
                isArrow = 'On'
            >
                <div className='bedMain'>
                    <div className='mb2'>
                        <div className='filterItemTitle'>Bedrooms</div>
                        <div className='bedBtnContainer mb1'>
                            <div className={`grayOutlineBtn ${filterStatus?.bedrooms ? '' : 'active'}`} onClick={()=>handleChangeBed(0)}> { filterStatus?.exactBedrooms ? 'Studio' : 'Any'}</div>
                            <div className={`grayOutlineBtn ${filterStatus?.bedrooms===1 ? 'active' : ''}`} onClick={()=>handleChangeBed(1)}>1{filterStatus?.exactBedrooms ? '': '+'}</div>
                            <div className={`grayOutlineBtn ${filterStatus?.bedrooms===2 ? 'active' : ''}`} onClick={()=>handleChangeBed(2)}>2{filterStatus?.exactBedrooms ? '': '+'}</div>
                            <div className={`grayOutlineBtn ${filterStatus?.bedrooms===3 ? 'active' : ''}`} onClick={()=>handleChangeBed(3)}>3{filterStatus?.exactBedrooms ? '': '+'}</div>
                            <div className={`grayOutlineBtn ${filterStatus?.bedrooms===4 ? 'active' : ''}`} onClick={()=>handleChangeBed(4)}>4{filterStatus?.exactBedrooms ? '': '+'}</div>
                            <div className={`grayOutlineBtn ${filterStatus?.bedrooms===5 ? 'active' : ''}`} onClick={()=>handleChangeBed(5)}>5{filterStatus?.exactBedrooms ? '': '+'}</div>
                        </div>
                        <div className='alignCenter'>
                            <input type="checkbox" className='mr5' id='exactBedrooms' onChange={handleChangeExact} />
                            <label htmlFor='exactBedrooms' className='cursorPointer fotn16'>Use exact match</label>    
                        </div>
                    </div>
                    <div>
                        <div className='filterItemTitle'>Bathrooms</div>
                        <div className='bedBtnContainer mb1'>
                            <div className={`grayOutlineBtn ${filterStatus?.baths ? '' : 'active'}`} onClick={()=>handleChangeBath(0)}>Any</div>
                            <div className={`grayOutlineBtn ${filterStatus?.baths===1 ? 'active' : ''}`} onClick={()=>handleChangeBath(1)}>1+</div>
                            <div className={`grayOutlineBtn ${filterStatus?.baths===1.5 ? 'active' : ''}`} onClick={()=>handleChangeBath(1.5)}>1.5+</div>
                            <div className={`grayOutlineBtn ${filterStatus?.baths===2 ? 'active' : ''}`} onClick={()=>handleChangeBath(2)}>2+</div>
                            <div className={`grayOutlineBtn ${filterStatus?.baths===3 ? 'active' : ''}`} onClick={()=>handleChangeBath(3)}>3+</div>
                            <div className={`grayOutlineBtn ${filterStatus?.baths===4 ? 'active' : ''}`} onClick={()=>handleChangeBath(4)}>4+</div>
                        </div>
                    </div>
                </div>
                <div className='dropdownFooter'>
                    <div className='btn whiteBtn' onClick={handleClickDone}>Done</div>
                </div>
            </DropDown>
        </div>
    )
}

export default BedsAndBaths;