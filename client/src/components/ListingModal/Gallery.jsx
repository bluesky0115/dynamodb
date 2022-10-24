import React, { useState, useEffect } from 'react'
import GalleryLightbox from './GalleryLightbox';
import './Gallery.scss';

const Gallery = (props) => {
    const {
        galleryData,
        data
    } = props

    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [images, setImages] = useState([]);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxIsOpen(true);
    }

    const closeLightbox = () => {
        setCurrentIndex(0);
        setLightboxIsOpen(false);
    }

    const gotoNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length)
    }

    const gotoPrevious = () => {
        setCurrentIndex((currentIndex + images.length - 1) % images.length)
    }    

    useEffect(()=>{
        if(!galleryData) return;
        const newArr = [];
        galleryData.photos.forEach(function(item){
            newArr.push(item.cacheUrl);
        })
        setImages(newArr);
    }, [galleryData])

    return (
        <div className='galleryContainer'>
        {   galleryData && (
                galleryData.photos.map(function (item, i) {
                    return (
                        <img className={`itemImage ${i === 0 ? 'mainImg ' : 'subImg '} ${i%2 === 1 ? 'leftImage' : ''}`}
                            key={i} 
                            src={item.cacheUrl}
                            onClick={ () => openLightbox(i) }
                            alt=''
                        />
                    )
                })
            )
        }
        {  images &&
            <GalleryLightbox 
                images={images}
                onClose={closeLightbox}
                onClickPrev={gotoPrevious}
                onClickNext={gotoNext}
                currentIndex={currentIndex}
                isOpen={lightboxIsOpen}
                data={data}
            />
        }

        </div>
    );
}
export default Gallery