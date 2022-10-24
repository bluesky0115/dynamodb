import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Login from '../../Login'

import './index.scss';

const AccountHeader = (props) => {
    const { children } = props
    const location = useLocation();
    
    return (
        <>
            <div className='backWhite'>
                <div className='container accountHeader'>
                    <div className='menuContanier'> 
                        <div className='logoLink'>
                            <Link to="/"><img src='./logo.png' alt=''/></Link>
                        </div>
                        <div className='d-flex'>
                            <Link to="/SavedHomes"><div className={`item ${location.pathname ==='/SavedHomes' ? 'active' : ''}`}>Saved homes</div></Link>
                            <Link to="/SavedSearch"><div className={`item ${location.pathname ==='/SavedSearch' ? 'active' : ''}`}>Saved searches</div></Link>
                            <Link to="/Renting"><div className={`item ${location.pathname ==='/Renting' ? 'active' : ''}`}>Renting</div></Link>
                            <Link to="/YourHome"><div className={`item ${location.pathname ==='/YourHome' ? 'active' : ''}`}>Your home</div></Link>
                            <Link to="/OfferClosings"><div className={`item ${location.pathname ==='/OfferClosings' ? 'active' : ''}`}>Offer & Closing</div></Link>
                            <Link to="/AccountSetting"><div className={`item ${location.pathname ==='/AccountSetting' ? 'active' : ''}`}>Account settings</div></Link>
                        </div>
                    </div>
                    <Login />
                </div>
            </div>
            
            <div className='backGray'>
                <div className='container pageMain'> 
                    {children}
                </div>
            </div>
        </>
)
}

export default AccountHeader;