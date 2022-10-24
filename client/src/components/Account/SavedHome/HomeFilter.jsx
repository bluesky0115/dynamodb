import React,{ useState, useEffect } from 'react'
import { FiCheck } from 'react-icons/fi'
import { BsSortUpAlt, BsSortDown } from 'react-icons/bs'
import { useSession } from '../../../contexts/SessionContext'
import SelectBox from '../../Common/SelectBox'

import './HomeFilter.scss'

const HomeFilter = (props) => {

    const {
      searchList,
      savedData,
      selectedStatus,
      setSelectedStatus,
      filterOrder,
      setFilterOrder,
      selectedFilter,
      setSelectedFilter
    } = props

    const [{user}] = useSession();
    const [uniqueStatus, setUniqueStatus] = useState([])

    useEffect(() => {
        let statusArray=[];
        if(savedData.length>0){
            savedData.forEach((item)=>{
                statusArray.push(item.System.SaleOrRent)
            })
            setUniqueStatus([...new Set(statusArray)]);
        }
    }, [savedData, user])

    useEffect(()=>{
        setSelectedStatus(uniqueStatus)
    },[uniqueStatus, setSelectedStatus])

    const handleClickStatus = (v) => {
        if(selectedStatus.includes(v)){
            const newArray = selectedStatus.filter((item) => item!==v )
            setSelectedStatus(newArray)
        } else {
            const newArray = [...selectedStatus]
            newArray.push(v)
            setSelectedStatus(newArray)
        }
    }

    const handleClickOrder = () => {
        setFilterOrder(prev => !prev)
    }

    const handleClickFilter = (v) => {
        setSelectedFilter(v);
    }

    const HomeFilterItem = ({item, handleClick}) => {
        return (
            <div className='filterItem' onClick={handleClick}>
                <span className='checkBox'>
                    { JSON.stringify(selectedFilter) === JSON.stringify(item) && <FiCheck/> }
                </span>
                <span className='itemTitle'>{item.title}</span>
            </div>
        )
    }

    return (
        user &&
        (
            <div className='smallItem'>
                <div className='savedHomesCounts'>
                    <div className='fontBold font16'>{user.savedHome.length} saved homes</div>
                    <div className='font12'>
                        { uniqueStatus.map((v, index)=>{
                            return index ===0 ? 
                                savedData.filter((item) => item.System.SaleOrRent === v).length + ' ' + v :
                                ', ' + savedData.filter((item) => item.System.SaleOrRent === v).length + ' ' + v
                          })
                        }
                    </div>
                </div>
                <div className='savedHomesFilter'>
                    <SelectBox
                        text={JSON.stringify(uniqueStatus) === JSON.stringify(selectedStatus) ? 'Showing all' : 'Showing some'}
                        width='220px'
                        dropWidth='220px'
                        className='mr10'
                        isMultiSelect
                    >
                        { uniqueStatus.map((v) =>(
                            <div className='statusSelectItem' key={v}>
                                <input type="checkbox" className='mr10' id={v} checked={selectedStatus.includes(v)} onChange={()=>handleClickStatus(v)}/>
                                <label className='spaceBetween flex1' htmlFor={v}>
                                    {v}
                                    <div className='fontBold'>
                                        {savedData.filter((item) => item.System.SaleOrRent === v).length}
                                    </div>
                                </label>
                            </div>
                          ))
                        }
                    </SelectBox>

                    <SelectBox
                        text={`By ${selectedFilter.title.toLowerCase()}`}
                        width='220px'
                        dropWidth='220px'
                        className='mr10'
                    >
                        { searchList.map((item) => (
                            <HomeFilterItem item={item} key={item.key} handleClick={()=>handleClickFilter(item)}/>
                          ))
                        }

                    </SelectBox>
                    { filterOrder ? <BsSortUpAlt className='filterOrder' onClick={handleClickOrder}/>
                                   : <BsSortDown className='filterOrder' onClick={handleClickOrder}/>
                    }

                </div>
            </div>
        )
    )
}

export default HomeFilter;