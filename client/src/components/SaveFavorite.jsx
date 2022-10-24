import React, {useState, useEffect} from 'react'
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { useSession } from '../contexts/SessionContext'
import LoginContainer from './Login/LoginContainer';
import { UpdateUser } from '../services/UserService';

const SaveFavorite = (props) => {
    const { itemId } = props

    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
    const [checkFavorite, setCheckFavorite] = useState(false)
    const [{auth, user},{setUser}] = useSession()

    const handleClickSaveFavorite = () => {
        if(auth){
            if(user?.savedHome.includes(itemId)){
                const newsaved = user.savedHome.filter((v) => v!== itemId);
                const newUserData = {...user, savedHome: newsaved }
                UpdateUser(user._id, newUserData)
                setUser(newUserData)
                setCheckFavorite(false)
            } else {
                const newArray = [...user.savedHome]
                newArray.push(itemId); 
                const newUserData = {...user, savedHome: newArray }
                UpdateUser(user._id, newUserData)
                setUser(newUserData)
                setCheckFavorite(true)
            }
        } else {
            setLoginModalIsOpen(true)
        }
    }
    
    useEffect(()=>{
        if(user?.savedHome){
            if(user.savedHome.includes(itemId)){
                setCheckFavorite(true)
            }
        }
    }, [user, itemId])
    
    return (
        <>
            <span className='actionBtn' onClick={handleClickSaveFavorite}>
                { user?.savedHome && checkFavorite ?  
                    ( <><RiHeartFill size='22'/>&nbsp;Saved</> ) : ( <><RiHeartLine size='22'/>&nbsp;Save</> )
                }
            </span>
            <LoginContainer 
                modalIsOpen={loginModalIsOpen} 
                setModalIsOpen={setLoginModalIsOpen}
            />
        </>
    )
}
export default SaveFavorite