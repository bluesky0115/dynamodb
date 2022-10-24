import React from 'react'

const TransactionType = (props) => {
    const { data } = props

    return (
        <>
        { data?.TransactionType && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>TransactionType</div>
                    <div className='mb1'>
                        { data.TransactionType?.Ownership && (<div><span className='w50'>Ownership</span>: <span className='font500'>{data.TransactionType.Ownership}</span></div>)}
                        { data.TransactionType?.PrpRstrctn && (<div><span className='w50'>PrpRstrctn</span>: <span className='font500'>{data.TransactionType.PrpRstrctn}</span></div>)}
                        { data.TransactionType?.ShortSale && (<div><span className='w50'>ShortSale</span>: <span className='font500'>{data.TransactionType.ShortSale}</span></div>)}
                        { data.TransactionType?.SlsRstrctn && (<div><span className='w50'>SlsRstrctn</span>: <span className='font500'>{data.TransactionType.SlsRstrctn}</span></div>)}
                        { data.TransactionType?.Terms && (<div><span className='w50'>Terms</span>: <span className='font500'>{data.TransactionType.Terms}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default TransactionType;