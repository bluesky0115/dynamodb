import React, { useState, useEffect, useRef } from 'react'
import { useSession } from '../contexts/SessionContext'
import LoginContainer from './Login/LoginContainer';
import { UpdateUser } from '../services/UserService';
import DropDown from '../components/Common/DropDown'
import { FaCheckCircle } from 'react-icons/fa';

const SaveSearch = (props) => {
    const { filterStatus } = props
    const buttonRef = useRef(null)
    
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
    const [successLoading, setSuccessLoading] = useState(false)
    const [dropIsOpen, setDropIsOpen] = useState(false)
    const [{auth, user},{setUser}] = useSession()

    const handleClickSaveSearch = () => {
        if(auth){
            setSuccessLoading(true)
            setDropIsOpen(true)

            let checkInclude = true;
            user.savedSearch.forEach((item) => {
                if(JSON.stringify(item) === JSON.stringify(filterStatus)) checkInclude = false;
            })

            if(checkInclude)
            {
                const newsearch = [filterStatus, ...user.savedSearch ];
                const newUserData = {...user, savedSearch: newsearch }
                UpdateUser(user._id, newUserData)
                setUser(newUserData)
            }
            setSuccessLoading(false)
        } else {
            setLoginModalIsOpen(true)
        }
    }

    const handleOutClick = (e) => {
        if (buttonRef.current.contains(e.target)) return
        setDropIsOpen(false);
    }

    useEffect(() => {
        window.addEventListener('click', handleOutClick);
        return () => window.removeEventListener('click', handleOutClick);
    },[dropIsOpen])

    return (
        <>
            <div className='filterOne saveSearchMain'>
                <div ref={buttonRef} className='btn btnPrimary mobileRow p-relative saveSearchBtn' onClick={handleClickSaveSearch}>
                    Save search
                </div>
                <DropDown
                    isOpen = {dropIsOpen}
                    leftOrRight = 'right'
                    width = '300px'
                    isArrow = 'Off'
                >
                    <div className='alignCenter spaceCenter'>
                        { successLoading ? 
                            (
                                <div className='paddingContainer'>
                                    <img alt="" className='smallLoading' src='./images/loader_grey.svg'/> 
                                </div>
                            )
                            :
                            (
                                <div className='paddingContainer successBack w100 fontBold font16 alignCenter'>
                                    <FaCheckCircle color="green" className="mr10 font20"/>
                                    Your search is saved!
                                </div>
                            )
                        }
                    </div>
                </DropDown>
            </div>
            <LoginContainer 
                modalIsOpen={loginModalIsOpen} 
                setModalIsOpen={setLoginModalIsOpen}
            />
        </>
    )
}

export default SaveSearch;