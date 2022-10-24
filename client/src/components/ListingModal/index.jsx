import React, { useEffect, useState } from 'react'
import { detailEndpoint } from '../../services/DetailService';
import { FaTimes } from 'react-icons/fa';
import Gallery from './Gallery';
import Detail from './Detail';
import './index.scss';

const ListingModal = (props) => {
  const {
    itemId,
    closeModal
  } = props

  const [data, setData] = useState(null)
  const [galleryData, setGalleryData] = useState(null)

  useEffect(() => {
    async function fetchData(){
      let url = detailEndpoint(itemId)
      let res = await fetch(url);
      let result = await res.json();
      setData(result);
  
      url = result._PhotoGalleryURL;
      res = await fetch(url);
      result = await res.json();
      setGalleryData(result);
    }
    fetchData();
  }, [itemId])

  return (
    galleryData && data &&
      <div className='modal'>
        <div className='modalWrapper'>
          <Gallery galleryData={galleryData} data={data}/>
          <Detail data={data}/>
        </div>
        <span className='closeWrapepr' onClick={closeModal}>
          <FaTimes />
        </span>
      </div>
  )
}
export default ListingModal
