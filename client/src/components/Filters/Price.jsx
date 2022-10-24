import React, {useState, useEffect, useRef} from 'react';
import DropDown from '../Common/DropDown';
import { PriceContent } from './PriceContent'
import Modal from 'react-modal';
import { ModalStyle } from '../Common/Modal.Style';
import { useWindowSize } from '../../hooks/useWindowSize'

import './Price.scss';

const Price = (props) => {
    const { 
        filterStatus, 
        setFilterStatus
    } = props

    const { width } = useWindowSize();

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const buttonRef = useRef(null)
    const modalRef = useRef(null)

    const numFormatter2 = num => {
        if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(0) + "K" // convert to K for number from > 1000 < 1 million
        } else if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + "M" // convert to M for number from > 1 million
        } else if (num < 900) {
        return num // if value < 1000, nothing to do
        }
    }
    
    const handleClickDone = () => {
        setDropdownIsOpen(false);
    }

    const handleOutClick = (e) => {
        if (buttonRef?.current?.contains(e.target)) return
        if(modalRef?.current?.contains(e.target)) return
        setDropdownIsOpen(false);
    }

    useEffect(() => {
        window.addEventListener('click', handleOutClick);
        return () => window.removeEventListener('click', handleOutClick);
    },[dropdownIsOpen])

    useEffect(() => {
        if(filterStatus?.priceLow===0){
            delete filterStatus.priceLow
            setFilterStatus(filterStatus);
        }
        if(filterStatus?.priceHigh===0){
            delete filterStatus.priceHigh
            setFilterStatus(filterStatus);
        }
    }, [filterStatus, setFilterStatus])

    const getDesignValue = (filterStatus) => {
        const res = { text: 'Price', color: 'rgb(180, 180, 180)' }

        if(filterStatus?.priceLow && filterStatus?.priceHigh){
            res.text= '$' + numFormatter2(filterStatus.priceLow) + ' - $' + numFormatter2(filterStatus.priceHigh)
            res.color = 'rgb(0, 79, 190)'
        }

        if(filterStatus?.priceLow && !filterStatus?.priceHigh){
            res.text= '$' + numFormatter2(filterStatus.priceLow) + '+'
            res.color = 'rgb(0, 79, 190)'
        }
        
        if(!filterStatus?.priceLow && filterStatus?.priceHigh){
            res.text= 'Up to $' + numFormatter2(filterStatus.priceHigh) 
            res.color = 'rgb(0, 79, 190)'
        }
        return res;
    }

    return (
        <div className='filterOne' ref={buttonRef}>
            <div className='filterBtn grayOutlineBtn' onClick={()=>setDropdownIsOpen(!dropdownIsOpen)} style={{ borderColor : getDesignValue(filterStatus).color }}>
                { getDesignValue(filterStatus).text }
            </div>
            { width > 700 && 
                <DropDown
                    isOpen = {dropdownIsOpen}
                    leftOrRight = 'left'
                    width = '400px'
                    isArrow = 'On'
                >
                    <PriceContent
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
                        <PriceContent 
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

export default Price;