import React from 'react';
import Modal from 'react-modal';
import { ModalStyle } from '../../Common/Modal.Style';
import { useSession } from '../../../contexts/SessionContext'
import { UpdateUser } from '../../../services/UserService';

Modal.setAppElement('body');

function DeleteSavedHomeModal(props) {

    const [{user},{setUser}] = useSession()
    const { modalIsOpen, closeModal } = props

    const removeAllSavedHomes = () => {
        const newUserData = {...user, savedHome: [] }
        UpdateUser(user._id, newUserData)
        setUser(newUserData)
        closeModal();
    }
    
    return (
        <Modal
            isOpen={modalIsOpen}
            style={{
                overlay: ModalStyle.overlay,
                content: {
                    ...ModalStyle.content,
                    width: '350px'
                }
            }}
        >
            <div className='backWhite borderRadius'>
                <div className='textCenter fontBold font20 paddingContainer borderBottom'>
                    Are you sure?
                </div>
                <div className='paddingContainer borderBottom'>
                    <div className='mb2'>
                        Removing these favorites will clear them from your web and app experiences.
                    </div>
                    <div>
                        Any notifications related to these favorites will also be removed.
                    </div>
                </div>
                <div className='paddingContainer textRight'>
                    <div className='deleteItem font18 mr10' onClick={closeModal}>Cancel</div>
                    <div className='btn btnDanger mr10 largeBtn fontBold' onClick={removeAllSavedHomes}>Remove all</div>
                </div>
            </div>
        </Modal>
    );
}

export default DeleteSavedHomeModal;