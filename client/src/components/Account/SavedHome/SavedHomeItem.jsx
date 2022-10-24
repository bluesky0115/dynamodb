import React, { useState, useRef } from 'react'
import Modal from 'react-modal';
import { useSession } from '../../../contexts/SessionContext'
import { UpdateUser } from '../../../services/UserService';
import { ModalStyle } from '../../Common/Modal.Style';
import HomeDetailItem from './HomeDetailItem'

import { RiHeartFill, RiTempHotLine, RiParkingBoxLine, RiCoinsLine, RiRobotLine } from 'react-icons/ri';
import { FaRegCalendarAlt } from 'react-icons/fa'
import { MdOutlineMapsHomeWork } from 'react-icons/md'
import { BsSnow } from 'react-icons/bs'
import './SavedHomeItem.scss'

Modal.setAppElement('body');

const checkFile = () => {
  try {
    return require("../../ListingModal")
  } catch (err) {
    return null;
  }
};
const ListingModal = checkFile() ? checkFile().default : null;

const SavedHomeItem = (props) => {
    const { home, cssClass } = props

    const [{user},{setUser}] = useSession()
    const buttonRef = useRef(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const numFormatter1 = num => {
        const hindiNumberFormatter = new Intl.NumberFormat("en-US");
        return hindiNumberFormatter.format(num)
    }

    const openModal = (e) => {
        if(buttonRef.current.contains(e.target)) return
        setModalIsOpen(true)  
    }
    const closeModal = () =>{
        setModalIsOpen(false)  
    }
    
    const handleClickRemoveSavedHome = (id) => {
        const newsaved = user.savedHome.filter((v) => v!== id);
        const newUserData = {...user, savedHome: newsaved }
        UpdateUser(user._id, newUserData)
        setUser(newUserData)
    }

    return (
        <>
            <div className={`SavedHomeItemContainer ${cssClass}`} onClick={openModal}>
                <div className='imgPriceCount'>
                    <img src={home.photoUrl} alt='' />
                    <div className='priceCount'>
                        <div className='font20'>
                            ${numFormatter1(home.Overview.OrigPrice)}
                        </div>
                        <div className='colorGray font12'>
                            <div>
                                {home.Layout.Beds && <span className='mr5'>{home.Layout.Beds} bds</span>}
                                {home.Layout.FB && <span className='mr5'>{home.Layout.FB} ba</span>}
                                {home.Layout.EstSF && <span className='mr5'>{numFormatter1(home.Layout.EstSF)} sqft</span>}
                                <span className='mr5'> - </span>
                                {home.System.SaleOrRent}
                            </div>
                            <div>
                                {home.Location?.Address}, {home.Location?.City}, {home.Location?.State} {home.Location?.Zip}
                            </div>
                        </div>
                    </div>
                    <div className='saveHomeIcon' ref={buttonRef}>
                        <RiHeartFill onClick={()=>handleClickRemoveSavedHome(home.System.SystemID)}/>
                    </div>
                </div>

                <div className='homeDetail'>
                    { home.System?.Status && <HomeDetailItem icon={<FaRegCalendarAlt/>} title='Availability' value={home.System.Status}/> }
                    { home?.Exterior?.Style && <HomeDetailItem icon={<MdOutlineMapsHomeWork/>} title='Type' value={home.Exterior.Style}/> }
                    { home?.PhysicalCondition?.YrBlt && <HomeDetailItem icon={<FaRegCalendarAlt/>} title='Year Built' value={home.PhysicalCondition.YrBlt}/> }
                    { home?.Features?.Cooling && <HomeDetailItem icon={<BsSnow/>} title='Cooling' value={home.Features.Cooling}/> }
                    { home?.Features?.HeatEqpmnt && <HomeDetailItem icon={<RiTempHotLine/>} title='Heating' value={home.Features.HeatEqpmnt}/> }
                    { home?.Parking?.ParkingTotal && <HomeDetailItem icon={<RiParkingBoxLine/>} title='Parking' value={home.Parking.ParkingTotal + ' Parking Space'}/> }
                    { home?.Financials?.MoTotFee && <HomeDetailItem icon={<RiCoinsLine/>} title='Parking' value={'$'+numFormatter1(home.Financials.MoTotFee)}/> }
                    { home?.Exterior?.LotSz && <HomeDetailItem icon={<RiRobotLine/>} title='Lot' value={home.Exterior.LotSz}/> }
                </div>
            </div>

            { ListingModal &&
                <Modal
                isOpen={modalIsOpen}
                style={{
                    overlay: ModalStyle.overlay,
                    content: {
                    ...ModalStyle.content,
                    width: '1300px'
                    }
                }}
                >
                <ListingModal
                    itemId={home.System.SystemID}
                    closeModal={closeModal}
                />
                </Modal>
            }
        </>
    )
}

export default SavedHomeItem;