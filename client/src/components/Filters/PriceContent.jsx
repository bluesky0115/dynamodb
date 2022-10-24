
import React from 'react'

export const PriceContent = (props) => {
    const { 
        filterStatus, 
        setFilterStatus,
        handleClickDone
    } = props

    const numFormatter1 = num => {
        const hindiNumberFormatter = new Intl.NumberFormat("en-US");
        return hindiNumberFormatter.format(num)
    }

    const handleChnageMin = (e) => {
        setFilterStatus({
            ...filterStatus,
            priceLow : parseInt(e.target.value.replace(",", ""))
        })
    }
    const handleClickMin = (v) => {
        setFilterStatus({
            ...filterStatus,
            priceLow : v
        })
    }

    const handleChnageMax = (e) => {
        setFilterStatus({
            ...filterStatus,
            priceHigh : parseInt(e.target.value.replace(",", ""))
        })
    }
    const handleClickMax = (v) => {
        setFilterStatus({
            ...filterStatus,
            priceHigh : v
        })
    }

    return (
        <>
            <div className='priceContainer'>
                <div className='filterItemTitle'>Price Range</div>
                <div className='PriceMain'>
                    <div className='columItem'>
                        <input className='inputBox mb1' placeholder='Min' value={filterStatus?.priceLow ? numFormatter1(filterStatus.priceLow) : ''} onChange={handleChnageMin}/>
                    </div>
                    -
                    <div className='columItem'>
                        <input className='inputBox mb1' placeholder='Max' value={filterStatus?.priceHigh ? numFormatter1(filterStatus.priceHigh) : ''} onChange={handleChnageMax} />
                    </div>
                </div>
                <div className='PriceMain'>
                    <div className='columItem'>
                        <div className='priceItem' onClick={() => handleClickMin(0)}>$0+</div>
                        <div className='priceItem' onClick={() => handleClickMin(100000)}>$100,000+</div>
                        <div className='priceItem' onClick={() => handleClickMin(200000)}>$200,000+</div>
                        <div className='priceItem' onClick={() => handleClickMin(300000)}>$300,000+</div>
                        <div className='priceItem' onClick={() => handleClickMin(400000)}>$400,000+</div>
                        <div className='priceItem' onClick={() => handleClickMin(500000)}>$500,000+</div>
                        <div className='priceItem' onClick={() => handleClickMin(600000)}>$600,000+</div>
                        <div className='priceItem' onClick={() => handleClickMin(700000)}>$700,000+</div>
                        <div className='priceItem' onClick={() => handleClickMin(800000)}>$800,000+</div>
                        <div className='priceItem' onClick={() => handleClickMin(900000)}>$900,000+</div>
                    </div>
                    <div className='columItem'>
                        <div className='priceItem' onClick={() => handleClickMax(500000)}>$500,000</div>
                        <div className='priceItem' onClick={() => handleClickMax(600000)}>$600,000</div>
                        <div className='priceItem' onClick={() => handleClickMax(700000)}>$700,000</div>
                        <div className='priceItem' onClick={() => handleClickMax(800000)}>$800,000</div>
                        <div className='priceItem' onClick={() => handleClickMax(900000)}>$900,000</div>
                        <div className='priceItem' onClick={() => handleClickMax(1000000)}>$1M</div>
                        <div className='priceItem' onClick={() => handleClickMax(1250000)}>$1.25M</div>
                        <div className='priceItem' onClick={() => handleClickMax(1500000)}>$1.5M</div>
                        <div className='priceItem' onClick={() => handleClickMax(1750000)}>$1.75M</div>
                        <div className='priceItem' onClick={() => handleClickMax(0)}>Any Price</div>
                    </div>
                </div>
            </div>
            <div className='dropdownFooter'>
                <div className='btn whiteBtn' onClick={handleClickDone}>Done</div>
            </div>
        </>
  )
}
