import React, { useState, useEffect } from 'react';
import { useSession } from '../../contexts/SessionContext'
import SignIn from './SignIn'
import Register from './Register'
import SocailLogin from './SocailLogin'
import Modal from 'react-modal';
import { ModalStyle } from '../Common/Modal.Style';
import Loading from '../Common/Loading';
import { GrClose } from 'react-icons/gr';

import './LoginContainer.scss';

Modal.setAppElement('body');

const LoginContainer = (props) => {
    const { modalIsOpen,
            setModalIsOpen
        } = props

    const [{auth, loading}] = useSession()
    const [isLoginTab, setLoginTab] = useState(true)

    const closeModal = () =>{
        setModalIsOpen(false)  
    }
    const handleClickLogin = () => {
        setLoginTab(true);
    }
    const handleClickRegister = () => {
        setLoginTab(false);
    }

    useEffect(() => {
        if(auth) setModalIsOpen(false)
    },[auth, setModalIsOpen])

    return (
        <>
            <Modal 
                isOpen={modalIsOpen && !loading} 
                style={{
                    overlay: ModalStyle.overlay,
                    content: {
                        ...ModalStyle.content,
                        width: '450px'
                    }
                }}
            >
                <div className='loginContainer'>
                    <span className='closeModal' onClick={closeModal}>
                        <GrClose />
                    </span>
                    <div className='textCenter'>
                        <h2 className='welcome'>Welcome to Redzilla</h2>
                    </div>
                    <div className='loginOrCreate'>
                        <div className={`item ${isLoginTab ? 'active' : ''}`} onClick={handleClickLogin}>Sign In</div>
                        <div className={`item ${isLoginTab ? '' : 'active'}`} onClick={handleClickRegister}>New account</div>
                    </div>

                    { isLoginTab ? <SignIn/> : <Register/>}
                    
                    <SocailLogin />
                </div>
            </Modal>
            { loading && <Loading/> }
        </>
    )

}

export default LoginContainer;