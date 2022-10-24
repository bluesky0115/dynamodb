import React, { useState, useEffect, useRef } from 'react'
import { useSession } from '../../contexts/SessionContext'
import DropDown from '../Common/DropDown';
import LoginContainer from './LoginContainer';
import AccountDropdown from '../Account/AccountDropdown';

import './index.scss';

const Login = () => {

    const [{auth, user}] = useSession()
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const buttonRef = useRef(null)
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
    
    const openLoginModal = () => {
        setLoginModalIsOpen(true)  
    }

    const openDropdown = () =>{
        setDropdownIsOpen(!dropdownIsOpen)
    }
    
    const handleOutClick = (e) => {
        if (buttonRef.current?.contains(e.target)) return
        setDropdownIsOpen(false);
    }

    useEffect(() => {
        window.addEventListener('click', handleOutClick);
        return () => window.removeEventListener('click', handleOutClick);
    },[dropdownIsOpen])

    return (
        <>
            <div ref={buttonRef} className='loginButton hoverBlue font16' onClick={ auth ? openDropdown : openLoginModal}>
                { auth ? <img src={user.profileImg ? user.profileImg : './user_profile.png'} alt="" /> : 'Sign In' }
                <DropDown
                    isOpen = {dropdownIsOpen}
                    leftOrRight = 'right'
                    width = '250px'
                    isArrow = 'Off'
                >
                    <AccountDropdown />
                </DropDown>
            </div>
            
            <LoginContainer 
                modalIsOpen={loginModalIsOpen} 
                setModalIsOpen={setLoginModalIsOpen}
            />
        </>
    )
}

export default Login;