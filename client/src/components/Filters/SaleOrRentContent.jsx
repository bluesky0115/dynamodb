
import { useState } from 'react'
import { GoPrimitiveDot } from 'react-icons/go';
import Constant from '../../Constant';
import { BsChevronDown } from 'react-icons/bs';

export const SaleOrRentContent = (props) => {
    const { 
        filterStatus, 
        setFilterStatus,
        handleClickDone
    } = props

    const [isViewMore, setIsViewMore] = useState(false);

    const handleChangesaleOrSold = (e) => {
        if(e.target.value === '1'){
            setFilterStatus({
                ...filterStatus,
                availableOnly : parseInt(e.target.value),
                forSaleTypes : [...Constant.initForSaleTypes]
            })
        } else {
            setFilterStatus({
                ...filterStatus,
                availableOnly : parseInt(e.target.value),
                forSaleTypes : []
            })
        }
    }

    const handleClickViewMore = () => {
        setIsViewMore(!isViewMore);
    }

    const handleCheck = (e) => {
        var updatedList = [...filterStatus.forSaleTypes];
        if (e.target.checked) {
          updatedList.push(e.target.value)
        } else {
          updatedList.splice(updatedList.indexOf(e.target.value), 1);
        }
        setFilterStatus({
            ...filterStatus,
            forSaleTypes : updatedList
        })
    }

    return (
        <>
            <div className='borderBottom'>
                <div className='row spaceBetween'>
                    <div className='alignCenter flex1'>
                        <input 
                            type="radio" 
                            name='saleOrSoldStatus' 
                            value='1' 
                            id='forSale'
                            checked={filterStatus.availableOnly === 1 ? true : false} 
                            onChange={handleChangesaleOrSold}
                        />
                        <label htmlFor='forSale'>
                            <GoPrimitiveDot color='red' size='30'/>
                            For Sale
                        </label>
                    </div>
                    <div className='viewMoreBtn' onClick={handleClickViewMore}>
                        <BsChevronDown color='#036bc5' size='20' 
                            style={{transform : isViewMore ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                    </div>
                </div>
                { isViewMore && filterStatus?.forSaleTypes && (
                    <div>
                        <div className='saleMore borderBottom'>
                            { Constant.initForSaleTypes.map((item, i) => {
                                return <div className='alignCenter w50 mb1' key={i}>
                                    <input type="checkbox" className='mr5' value={item} id={'check'+i} onChange={handleCheck}
                                        checked ={ filterStatus.forSaleTypes.includes(item) ? true : false }
                                    />
                                    <label htmlFor={'check'+i} className='cursorPointer'>{item}</label>    
                                </div>
                            })}
                        </div>
                        <div className='saleMore borderBottom'>
                            <div className='alignCenter w100 mb1'>
                                <input type="checkbox" className='mr5' value="Foreclosed" id='check7' onChange={handleCheck}
                                    checked ={ filterStatus.forSaleTypes.includes("Foreclosed") ? true : false }
                                />
                                <label htmlFor='check7' className='cursorPointer'>Foreclosed</label>    
                            </div>
                            <div className='alignCenter w100'>
                                <input type="checkbox" className='mr5' value="Pre-Foreclosures" id='check8' onChange={handleCheck}
                                    checked ={ filterStatus.forSaleTypes.includes("Pre-Foreclosures") ? true : false }
                                />
                                <label htmlFor='check8' className='cursorPointer'>Pre-Foreclosures</label>    
                            </div>
                        </div>
                        
                        <div className='saleMore'>
                            <div className='alignCenter w100 mb1'>
                                <input type="checkbox" className='mr5' value="Accepting Backup Offers" id='check9' onChange={handleCheck}
                                    checked ={ filterStatus.forSaleTypes.includes("Accepting Backup Offers") ? true : false }
                                />
                                <label htmlFor='check9' className='cursorPointer'>Accepting Backup Offers</label>    
                            </div>
                            <div className='alignCenter w100'>
                                <input type="checkbox" className='mr5' value="Pending & Under Contract" id='check10' onChange={handleCheck}
                                    checked ={ filterStatus.forSaleTypes.includes("Pending & Under Contract") ? true : false }
                                />
                                <label htmlFor='check10' className='cursorPointer'>Pending & Under Contract</label>    
                            </div>
                        </div>
                    </div>
                )}                    
            </div>

            <div className='borderBottom row'>
                <input 
                    type="radio" 
                    name='saleOrSoldStatus' 
                    value='2' 
                    id="forSold"
                    checked={filterStatus.availableOnly === 2 ? true : false} 
                    onChange={handleChangesaleOrSold}
                />
                <label htmlFor='forSold'>
                    <GoPrimitiveDot color='#ffd237' size='30'/>
                    Sold
                </label>
            </div>
            <div className='dropdownFooter'>
                <div className='btn whiteBtn' onClick={handleClickDone}>Done</div>
            </div>
        </>
  )
}
