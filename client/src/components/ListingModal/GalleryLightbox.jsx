import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { RiHeartLine, RiMailFill } from 'react-icons/ri';
import { GrNext, GrPrevious } from "react-icons/gr";

import './GalleryLightbox.scss';

const GalleryLightbox = (props) => {
    const {
        images,
        onClose,
        onClickPrev,
        onClickNext,
        currentIndex,
        isOpen,
        data
    } = props

    const numFormatter = num => {
        const hindiNumberFormatter = new Intl.NumberFormat("en-US");
        return hindiNumberFormatter.format(num)
    }
    
    return (
        <>
        { isOpen && (
            <div className='lightbox'> 
                <div className='boxHeader'>
                    <div className='boxHeaderPhotos'>
                        Photos
                    </div>
                    <div className='alignCenter'>
                        <span className='actionBtn btn btnPrimary' onClick={()=> alert('the Take a tour button was clicked!')}>Take a tour</span>
                        <span className='actionBtn' onClick={()=> alert('the Save button was clicked!')}>
                            <RiHeartLine size='20'/>&nbsp;&nbsp;Save Home
                        </span>
                        <span className='actionBtn' onClick={()=> alert('the Share button was clicked!')}>
                            <RiMailFill size='20'/>&nbsp;&nbsp;Share
                        </span>
                        <span className='boxClose' onClick={onClose}>
                            <FaTimes size='22'/>
                        </span>
                    </div>
                </div>
                <div className='lightBoxContainer'>
                    <div className='prevBtn arrowBtn' onClick={onClickPrev}><GrPrevious style={{ color: "green" }} /></div>
                    <div className='nextBtn arrowBtn' onClick={onClickNext}><GrNext color="gray" /></div>
                    <div className='imageWrapper'>
                        <img src={images[currentIndex]} className='mainImg' alt=""/>
                        <div className='countStatus'>
                            {(currentIndex+1) + ' of ' + images.length}
                        </div>
                    </div>
                </div>
                <div className='textCenter font15'>
                    {data.System.SaleOrRent + ': ' + numFormatter(data.Overview.OrigPrice) + ' (' + (data.Layout.Beds || 0) + ' bed, ' + (data.Layout.FB || 0) + ' baths, ' + (numFormatter(data.Layout.EstSF) || 0) + ' Square Feet'} 
                </div>
            </div>
        )}
        </>
    )
}

export default GalleryLightbox;