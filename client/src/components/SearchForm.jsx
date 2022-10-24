import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchForm.scss';

const SearchForm = (props) => {
    const { 
        filterStatus, 
        setFilterStatus
    } = props
    
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFilterStatus({
            ...filterStatus,
            keywords : value
        })
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        setValue(filterStatus.keywords)
    }, [filterStatus]);

    return (
        <form action="#" onSubmit={handleSubmit} className='inlineInputContainer mr10'>
            <input type="text" value={value} className='inputBox prevInputBox font12' id="keywords" onChange={handleChange}/>
            <button type="submit" className='inlineNext'>
                <BsSearch />
            </button>
        </form>
    )
}

export default SearchForm;