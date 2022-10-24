import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaRegTrashAlt } from 'react-icons/fa'
import { useSession } from '../../../contexts/SessionContext'
import { UpdateUser } from '../../../services/UserService';

function SavedSearchItem(props) {

    const { index, item } = props

    const navigate = useNavigate();
    const [{ user }, { setUser }] = useSession();

    const numFormatter2 = num => {
        if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(0) + "K" // convert to K for number from > 1000 < 1 million
        } else if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + "M" // convert to M for number from > 1 million
        } else if (num < 900) {
        return num // if value < 1000, nothing to do
        }
    }

    const handleClickDeleteSearch = (index) => {
        const newArray = [...user.savedSearch];
        newArray.splice(index, 1)

        const newUser = {
            ...user,
            savedSearch: newArray
        }

        setUser(newUser);
        UpdateUser(user._id, newUser)
    }

    const handleClickSearchView = (index) => {
        navigate('/', { state: { searchIndex: index } })
    }

    return (
        <div className='smallItem'>
            <div>
                <span className='blueLink' onClick={() => handleClickSearchView(index)}>{item.keywords}</span>
                <div className='font14'>
                    {item.availableOnly === 1 ? 'For Sale' : 'Sold'}
                    {item?.priceLow && ' | Min Price: $'+numFormatter2(item.priceLow) }
                    {item?.priceHigh && ' | Max Price: $'+numFormatter2(item.priceHigh) }
                    {item?.bedrooms && ' | Bedrooms: '+item.bedrooms+'+' }
                    {item?.baths && ' | Bathrooms: '+item.baths+'+' }
                    {item?.maxFees && ' | Max HOA: $'+item.maxFees+'/month' }
                    {item?.minParkingSpots && ' | Parking Spots: '+item.minParkingSpots+'+' }
                </div>
            </div>
            <div className='deleteItem' onClick={() => handleClickDeleteSearch(index)}>
                <FaRegTrashAlt className='mr10' />
                Delete
            </div>
        </div>
    );
}

export default SavedSearchItem;