import React, {useState, useEffect, useRef} from 'react';
import DropDown from '../Common/DropDown';
import { MoreContent } from './MoreContent'
import Modal from 'react-modal';
import { ModalStyle } from '../Common/Modal.Style';
import { useWindowSize } from '../../hooks/useWindowSize'

import './More.scss';

const More = (props) => {
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
            <div className='filterBtn grayOutlineBtn' onClick={()=>setDropdownIsOpen(!dropdownIsOpen)}>More</div>
            { width > 700 && 
                <DropDown
                    isOpen = {dropdownIsOpen}
                    leftOrRight = 'right'
                    width = '450px'
                    isArrow = 'On'
                >
                    <MoreContent
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
                        <MoreContent 
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

export default More;