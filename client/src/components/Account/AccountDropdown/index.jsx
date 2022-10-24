import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useSession } from '../../../contexts/SessionContext'

import './index.scss';

const AccountDropdown = () => {

    const navigate = useNavigate();
    const [,{logout}] = useSession()

    const handleClickLogout = () => { 
        logout();
        navigate('/');
    }
    
    return (
        
        <div className='accountDropdown font14'>
            <Link to="/SavedHomes"><div className='dropdownItem'>Saved homes</div></Link>
            <Link to="/SavedSearch"><div className='dropdownItem'>Saved searches</div></Link>
            <Link to="/YourHome"><div className='dropdownItem'>Your home</div></Link>
            <Link to="/OfferClosings"><div className='dropdownItem'>Offer & Closings</div></Link>
            <Link to="/Renting"><div className='dropdownItem'>Renting</div></Link>
            <Link to="/AccountSetting"><div className='dropdownItem'>Account Settings</div></Link>
            <hr/>
            <div className='dropdownItem' onClick={handleClickLogout}>Sing Out</div>
        </div>
    )
}

export default AccountDropdown;