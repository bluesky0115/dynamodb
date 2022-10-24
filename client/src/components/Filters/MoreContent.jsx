
import React from 'react'
import Constant from '../../Constant';

export const MoreContent = (props) => {
    const { 
        filterStatus, 
        setFilterStatus,
        handleClickDone
    } = props

    const handleChangeMaxFee = (e) => {
        if(!e.target.value){
            const myObj = {...filterStatus}
            delete myObj?.maxFees
            setFilterStatus(myObj);
        } else{
            setFilterStatus({
                ...filterStatus,
                maxFees: parseInt(e.target.value)
            })
        }
    }

    const handleChangeParkingSpots = (e) => {
        if(!e.target.value){
            const myObj = {...filterStatus}
            delete myObj?.minParkingSpots
            setFilterStatus(myObj);
        } else{
            setFilterStatus({
                ...filterStatus,
                minParkingSpots: parseInt(e.target.value)
            })
        }
    }

    const handleChangeMustHaveGarage = (e) => {
        if(!e.target.checked){
            const myObj = {...filterStatus}
            delete myObj?.mustHaveGarage
            setFilterStatus(myObj);
        } else {
            setFilterStatus({
                ...filterStatus,
                mustHaveGarage: true
            })
        }
    }

    const handleChangeMinSize = (e) => {
        if(!e.target.value){
            const myObj = {...filterStatus}
            delete myObj?.minSize
            setFilterStatus(myObj);
        } else{
            setFilterStatus({
                ...filterStatus,
                minSize: parseInt(e.target.value)
            })
        }
    }

    const handleChangeMaxSize = (e) => {
        if(!e.target.value){
            const myObj = {...filterStatus}
            delete myObj?.maxSize
            setFilterStatus(myObj);
        } else{
            setFilterStatus({
                ...filterStatus,
                maxSize: parseInt(e.target.value)
            })
        }
    }

    const handleChangeMinLotSize = (e) => {
        if(!e.target.value){
            const myObj = {...filterStatus}
            delete myObj?.minLotSize
            setFilterStatus(myObj);
        } else{
            setFilterStatus({
                ...filterStatus,
                minLotSize: parseInt(e.target.value)
            })
        }
    }

    const handleChangeMaxLotSize = (e) => {
        if(!e.target.value){
            const myObj = {...filterStatus}
            delete myObj?.maxLotSize
            setFilterStatus(myObj);
        } else{
            setFilterStatus({
                ...filterStatus,
                maxLotSize: parseInt(e.target.value)
            })
        }
    }


    const handleChangeYearBuiltMin = (e) => {
        if(!e.target.value){
            const myObj = {...filterStatus}
            delete myObj?.minYearBuilt
            setFilterStatus(myObj);
        } else {
            setFilterStatus({
                ...filterStatus,
                minYearBuilt: parseInt(e.target.value)
            })
        }
    }

    const handleChangeYearBuiltMax = (e) => {
        if(!e.target.value){
            const myObj = {...filterStatus}
            delete myObj?.maxYearBuilt
            setFilterStatus(myObj);
        } else {
            setFilterStatus({
                ...filterStatus,
                maxYearBuilt: parseInt(e.target.value)
            })
        }
    }

    const handleChangeSingleStory = (e) => {
        if(!e.target.checked){
            const myObj = {...filterStatus}
            delete myObj?.maxStories
            setFilterStatus(myObj);
        } else {
            setFilterStatus({
                ...filterStatus,
                maxStories: 1
            })
        }
    }

    const handleChangeSeniorLiving = (e) => {
        if(!e.target.checked){
            const myObj = {...filterStatus}
            delete myObj?.hideFiftyFivePlus
            setFilterStatus(myObj);
        } else {
            setFilterStatus({
                ...filterStatus,
                hideFiftyFivePlus: true
            })
        }
    }

    const handleChangeOtherAmenities = (e) => {
        const myObj = { ...filterStatus }
        if(myObj.otherAmenities.includes(e.target.value)){
            myObj.otherAmenities.splice(myObj.otherAmenities.indexOf(e.target.value), 1)
        } else {
            myObj.otherAmenities.push(e.target.value);
        }
        setFilterStatus(myObj);
    }

    const handleChangeViewType = (e) => {
        const myObj = { ...filterStatus }
        if(myObj.viewTypes.includes(e.target.value)){
            myObj.viewTypes.splice(myObj.viewTypes.indexOf(e.target.value), 1)
        } else {
            myObj.viewTypes.push(e.target.value);
        }
        setFilterStatus(myObj);
    }

    const handleChangeKeywords = (e) => {
        setFilterStatus({
            ...filterStatus,
            keywords: e.target.value
        })
    }

    const resetFilter = () => {
        const myObj = {
            keywords : document.querySelector('#keywords').value,
            availableOnly : 1,
            forSaleTypes : [...Constant.initForSaleTypes],
            propertyType: [...Constant.initPropertyType],
            otherAmenities: [],
            viewTypes : [],
            per_page : 200
        }
        setFilterStatus(myObj)
    }

    return (
        <>
            <div className='moreMain'>
                <div className='alignCenter mobileColum mb1'>
                    <div className='moreItemText'>Max HOA</div>
                    <div className='moreValue'>
                        <select className='inputBox w100' 
                            value={filterStatus?.maxFees ? filterStatus?.maxFees : filterStatus.maxFees===0 ? '0' : ''} 
                            onChange={handleChangeMaxFee}
                        >
                            <option value=''>Any</option>
                            <option value='0'>No HOA Fee</option>
                            { Constant.initMaxFee.map((item, i) => {
                                return <option key={i} value={item}>${item}/month</option>
                            })}
                        </select>
                    </div>
                </div>

                <div className='alignCenter mobileColum'>
                    <div className='moreItemText'>Parking Spots</div>
                    <div className='moreValue'>
                        <select className='inputBox w100' value={filterStatus?.minParkingSpots || ''} onChange={handleChangeParkingSpots}>
                            <option value=''>Any</option>
                            <option value='1'>1+</option>
                            <option value='2'>2+</option>
                            <option value='3'>3+</option>
                            <option value='4'>4+</option>
                        </select>
                    </div>
                </div>

                <div className='alignCenter mb1 mobileColum'>
                    <div className='moreItemText'></div>
                    <div className='moreValue'>
                        <input type='checkbox' id='parkingSpotsCheck' onChange={handleChangeMustHaveGarage}
                            checked = {filterStatus?.mustHaveGarage ? true : false }
                        />
                        <label htmlFor='parkingSpotsCheck' className='cursorPointer'>Must have garage</label>
                    </div>
                </div>

                <div className='alignCenter mobileColum mb1'>
                    <div className='moreItemText'>Square Feet</div>
                    <div className='flex1 alignCenter spaceBetween'>
                        <div className='columItem'>
                            <select className='inputBox w100' 
                                value={filterStatus?.minSize || ''} 
                                onChange={handleChangeMinSize}
                            >
                                <option value=''>Any</option>
                                { Constant.initSquareFeet.map((item, i) => {
                                    return <option key={i} value={item}>{item}</option>
                                })}
                            </select>
                        </div>
                        -
                        <div className='columItem'>
                            <select className='inputBox w100' 
                                value={filterStatus?.maxSize || ''} 
                                onChange={handleChangeMaxSize}
                            >
                                { Constant.initSquareFeet.map((item, i) => {
                                    return <option key={i} value={item}>{item}</option>
                                })}
                                <option value=''>Any</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='alignCenter mobileColum mb1'>
                    <div className='moreItemText'>Lot Size</div>
                    <div className='flex1 alignCenter spaceBetween'>
                        <div className='columItem'>
                            <select className='inputBox w100' 
                                value={filterStatus?.minLotSize || ''} 
                                onChange={handleChangeMinLotSize}
                            >
                                <option value=''>Any</option>
                                { Object.entries(Constant.initLotSize).map(([key,value]) => {
                                    return <option key={key} value={value}>{key}</option>
                                })}
                            </select>
                        </div>
                        -
                        <div className='columItem'>
                            <select className='inputBox w100' 
                                value={filterStatus?.maxLotSize || ''} 
                                onChange={handleChangeMaxLotSize}
                            >
                                { Object.entries(Constant.initLotSize).map(([key,value]) => {
                                    return <option key={key} value={value}>{key}</option>
                                })}
                                <option value=''>Any</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='alignCenter mobileColum mb1'>
                    <div className='moreItemText'>Year Built</div>
                    <div className='flex1 alignCenter spaceBetween'>
                        <div className='columItem'>
                            <input className='inputBox' placeholder='Min' onChange={handleChangeYearBuiltMin} value={filterStatus?.minYearBuilt || ''}/>
                        </div>
                        -
                        <div className='columItem'>
                            <input className='inputBox' placeholder='Max' onChange={handleChangeYearBuiltMax} value={filterStatus?.maxYearBuilt || ''}/>
                        </div>
                    </div>
                </div>

                <div className='alignCenter mb1 mobileColum'>
                    <div className='moreItemText'>Number of Stories</div>
                    <div className='moreValue'>
                        <input type='checkbox' id='singleStory' onChange={handleChangeSingleStory}
                            checked = {filterStatus?.maxStories ? true : false }
                        />
                        <label htmlFor='singleStory' className='cursorPointer'>Single-story only</label>
                    </div>
                </div>

                <div className='alignCenter mb1 mobileColum'>
                    <div className='moreItemText'>Senior Living</div>
                    <div className='moreValue'>
                        <input type='checkbox' id='seniorLiving' onChange={handleChangeSeniorLiving}
                            checked = {filterStatus?.hideFiftyFivePlus ? true : false }
                        />
                        <label htmlFor='seniorLiving' className='cursorPointer'>Hide 55+ communities</label>
                    </div>
                </div>

                <div className='mb1'>
                    <div className='moreItemText'>Other Amenities</div>
                    <div className='checkMain'>
                        { Constant.initOtherAmenities.map((item, i) => {
                            return <div className='alignCenter' key={i}>
                                <input type='checkbox' value={item} id={`otherAmenities${i}`} onChange={handleChangeOtherAmenities}
                                    checked={filterStatus?.otherAmenities.includes(item) ? true : false}
                                />
                                <label htmlFor={`otherAmenities${i}`} className='cursorPointer'>{item}</label>
                            </div>
                        }) }
                    </div>
                </div>

                <div className='mb2'>
                    <div className='moreItemText'>View</div>
                    <div className='flexWrap checkMain'>
                        { Constant.initViewTypes.map((item, i) => {
                            return <div className='w50 alignCenter' key={i}>
                                <input type='checkbox' value={item} id={`viewType${i}`} onChange={handleChangeViewType}
                                    checked={filterStatus?.viewTypes.includes(item) ? true : false}
                                />
                                <label htmlFor={`viewType${i}`} className='cursorPointer'>{item}</label>
                            </div>
                        }) }
                    </div>
                </div>

                <div className='alignCenter mobileColum'>
                    <div className='moreItemText'>Keywords</div>
                    <div className='moreValue'>
                        <input className='inputBox' placeholder='' onChange={handleChangeKeywords} value={filterStatus?.keywords || ''}/>
                    </div>
                </div>

            </div>
            <div className='dropdownFooter spaceBetween alignCenter'>
                <div className='resetLink' onClick={resetFilter}>Reset All Filters</div>
                <div className='btn whiteBtn' onClick={handleClickDone}>Done</div>
            </div>
        </>
  )
}
