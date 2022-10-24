import React from 'react'

const Financials = (props) => {
    const { data } = props

    return (
        <>
        { data?.Financials && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>Financials</div>
                    <div className='mb1'>
                        { data.Financials?.MoTotFee && (<div><span className='w50'>MoTotFee</span>: <span className='font500'>${data.Financials.MoTotFee}</span></div>)}
                        { data.Financials?.OtherFee && (<div><span className='w50'>OtherFee</span>: <span className='font500'>${data.Financials.OtherFee}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default Financials;