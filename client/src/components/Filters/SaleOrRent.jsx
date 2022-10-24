import React, {useState, useEffect, useRef} from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import DropDown from '../Common/DropDown';
import { SaleOrRentContent } from './SaleOrRentContent'
import Modal from 'react-modal';
import { ModalStyle } from '../Common/Modal.Style';
import { useWindowSize } from '../../hooks/useWindowSize'

import './SaleOrRent.scss';

const SaleOrRent = (props) => {
    const { 
        filterStatus, 
        setFilterStatus
    } = props

    const { width } = useWindowSize();

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const buttonRef = useRef(null)
    const modalRef = useRef(null)
    
    const handleOutClick = (e) => {
        if (buttonRef?.current?.contains(e.target)) return
        if(modalRef?.current?.contains(e.target)) return
        setDropdownIsOpen(false);
    }

    useEffect(() => {
        window.addEventListener('click', handleOutClick);
        return () => window.removeEventListener('click', handleOutClick);
    },[dropdownIsOpen])

    const handleClickDone = () => {
        setDropdownIsOpen(false);
    }


    return (
        <div className='filterOne' ref={buttonRef}>
            <div className='filterBtn grayOutlineBtn' onClick={()=>setDropdownIsOpen(!dropdownIsOpen)} style={{ borderColor: filterStatus?.availableOnly ? 'rgb(0, 79, 190)': 'rgb(180, 180, 180)' }}>
                <GoPrimitiveDot color={filterStatus.availableOnly === 1 ? 'red' : '#ffd237' } size='20'/>
                {filterStatus.availableOnly === 1 ? 'For Sale' : 'Sold'}
            </div>
            { width > 700 && 
                <DropDown
                    isOpen = {dropdownIsOpen}
                    leftOrRight = 'left'
                    width = '400px'
                    isArrow = 'On'
                >
                    <SaleOrRentContent 
                        filterStatus={filterStatus} 
                        setFilterStatus={setFilterStatus} 
                        handleClickDone={handleClickDone} 
                    />
                </DropDown>
            }
            { width <= 700 && 
                <Modal 
                    isOpen={dropdownIsOpen} 
                    style={{
                        overlay: ModalStyle.overlay,
                        content: {
                            ...ModalStyle.content,
                            width: '400px',
                            overflow: 'auto'
                        }
                    }}
                >
                    <div className='backWhite' ref={modalRef}>
                        <SaleOrRentContent 
                            filterStatus={filterStatus} 
                            setFilterStatus={setFilterStatus} 
                            handleClickDone={handleClickDone} 
                        />
                    </div>
                </Modal>
            }
        </div>
    )
}

export default SaleOrRent;