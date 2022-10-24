import React, { useState, useEffect } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa'
import { useSession } from '../contexts/SessionContext'
import HomeFilter from '../components/Account/SavedHome/HomeFilter'
import SavedHomeItem from '../components/Account/SavedHome/SavedHomeItem'
import DeleteSavedHomeModal from '../components/Account/SavedHome/DeleteSavedHomeModal'
import Pagenation from '../components/Common/Pagenation'
import { detailEndpoint } from '../services/DetailService';

function SavedHomes() {
    const searchList = [
      { title: 'Date added', key: 'date_added' },
      { title: 'Status', key: 'status' },
      { title: 'Price', key: 'price' },
      { title: 'Bedrooms', key: 'bedrooms' },
      { title: 'Bathrooms', key: 'bathrooms' },
      { title: 'Home size (sq. ft.)', key: 'home_size' },
      { title: 'Lot size (sq. ft.)', key: 'lot_size' },
      { title: 'Zestimate', key: 'zestimate' }
    ]

    const [{ user }] = useSession()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [savedData, setSavedData] = useState([])
    const [finalResult, setFinalResult] = useState([])
    const [selectedStatus, setSelectedStatus] = useState([])
    const [selectedFilter, setSelectedFilter] = useState(searchList[0])
    const [filterOrder, setFilterOrder] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const countPerPage = 3

    const childProps = {
      searchList: searchList,
      savedData: savedData,
      setSavedData: setSavedData,
      selectedStatus: selectedStatus,
      setSelectedStatus: setSelectedStatus,
      filterOrder: filterOrder,
      setFilterOrder: setFilterOrder,
      selectedFilter: selectedFilter,
      setSelectedFilter: setSelectedFilter
    }

    const openModal = () => {
      setModalIsOpen(true);
    }
    const closeModal = () => {
      setModalIsOpen(false);
    }

    const handleChangePage = (p) => {
      setCurrentPage(p)
    }

    useEffect(() => {
        const pages = Math.ceil(finalResult.length/countPerPage)
        setTotalPages(pages)
    }, [finalResult])

    useEffect(() => {
      setSavedData([])
      async function fetchData(itemId){
        let url = detailEndpoint(itemId)
        let res = await fetch(url);
        let result = await res.json();
        const itemData = { ...result }

        url = result._PhotoGalleryURL;
        res = await fetch(url);
        result = await res.json();

        const newItemData  = {
          ...itemData,
          photoUrl: result.photos[0].cacheUrl
        }
        setSavedData(prev => [...prev, newItemData])
      }

      if(user?.savedHome){
        user?.savedHome.forEach((itemId) =>{
          fetchData(itemId)
        });
      }
    }, [user])

    useEffect(() => {
      if(savedData){
        const newHomes = []
        if(selectedStatus){
          selectedStatus.forEach((status) => {
            const filteredHome = savedData.filter((item) => (
              item.System.SaleOrRent === status
            ))
            newHomes.push(...filteredHome);
          })
        }

        if(newHomes.length>0){
          switch (selectedFilter.key) {
            case "date_added":
              if(filterOrder)
                newHomes.sort((a, b) => (a.System.UpdtDate > b.System.UpdtDate) ? 1 : -1)
              else 
                newHomes.sort((a, b) => (a.System.UpdtDate < b.System.UpdtDate) ? 1 : -1)
              break;

            case "status":
              if(filterOrder)
                newHomes.sort((a, b) => (a.System.SaleOrRent > b.System.SaleOrRent) ? 1 : -1)
              else 
                newHomes.sort((a, b) => (a.System.SaleOrRent < b.System.SaleOrRent) ? 1 : -1)
              break;
              
            case "price":
              if(filterOrder)
                newHomes.sort((a, b) => (parseFloat(a.Overview.OrigPrice) > parseFloat(b.Overview.OrigPrice)) ? 1 : -1)
              else
                newHomes.sort((a, b) => (parseFloat(a.Overview.OrigPrice) < parseFloat(b.Overview.OrigPrice)) ? 1 : -1)
              break;

            case "bedrooms":
              if(filterOrder)
                newHomes.sort((a, b) => (parseFloat(a.Layout.Beds) > parseFloat(b.Layout.Beds)) ? 1 : -1)
              else 
                newHomes.sort((a, b) => (parseFloat(a.Layout.Beds) < parseFloat(b.Layout.Beds)) ? 1 : -1)
              break;

            case "bathrooms":
              if(filterOrder)
                newHomes.sort((a, b) => (parseFloat(a.Layout.FB) > parseFloat(b.Layout.FB)) ? 1 : -1)
              else 
                newHomes.sort((a, b) => (parseFloat(a.Layout.FB) < parseFloat(b.Layout.FB)) ? 1 : -1)
              break;

            case "home_size":
              if(filterOrder)
                newHomes.sort((a, b) => (parseFloat(a.Layout.EstSF) > parseFloat(b.Layout.EstSF)) ? 1 : -1)
              else 
                newHomes.sort((a, b) => (parseFloat(a.Layout.EstSF) < parseFloat(b.Layout.EstSF)) ? 1 : -1)
              break;

            case "lot_size":
              if(filterOrder)
                newHomes.sort((a, b) => (parseFloat(a.Exterior.LotSz) > parseFloat(b.Exterior.LotSz)) ? 1 : -1)
              else 
                newHomes.sort((a, b) => (parseFloat(a.Exterior.LotSz) < parseFloat(b.Exterior.LotSz)) ? 1 : -1)
              break;

            case "zestimate":
              if(filterOrder)
                newHomes.sort((a, b) => (a.Overview.OrigPrice > b.Overview.OrigPrice) ? 1 : -1)
              else 
                newHomes.sort((a, b) => (a.Overview.OrigPrice < b.Overview.OrigPrice) ? 1 : -1)
              break;

            default:
              console.log("No filter values!");
              break;              
          }
        }
        setFinalResult(newHomes);
      }
    }, [selectedStatus, selectedFilter, filterOrder, savedData])

    return (
      <>
        <div className='spaceBetween alignCenter'>
          <h1 className='pageTitle'> Saved homes</h1>
          <div className='deleteItem' onClick={openModal}>
            <FaRegTrashAlt className='mr10' />
            Delete
          </div>
        </div>
        <HomeFilter {...childProps} />

        <div className='flexWrap mb2'>
          {finalResult &&
            finalResult.slice((currentPage-1)*countPerPage, currentPage*countPerPage)
            .map((home, index) => (
              <SavedHomeItem home={home} key={home.System.SystemID} cssClass={index % 3 === 2 ? 'noMarginRight' : ''} />
            ))
          }
        </div>

        { totalPages>0 &&
          <div className='textCenter mb2'>
            <Pagenation 
              currentPage={currentPage} 
              totalPages={totalPages}
              handleChangePage={handleChangePage}
            />
          </div>
        }

        <DeleteSavedHomeModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </>
    );
}

export default SavedHomes;