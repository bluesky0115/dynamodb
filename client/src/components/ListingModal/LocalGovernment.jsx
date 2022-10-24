import React from 'react'

const LocalGovernment = (props) => {
    const { data } = props

    return (
        <>
        { data?.LocalGovernment && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>LocalGovernment</div>
                    <div className='mb1'>
                        { data.LocalGovernment?.APN && (<div><span className='w50'>APN</span>: <span className='font500'>{data.LocalGovernment.APN}</span></div>)}
                        { data.LocalGovernment?.CDRMRFee && (<div><span className='w50'>CDRMRFee</span>: <span className='font500'>{data.LocalGovernment.CDRMRFee}</span></div>)}
                        { data.LocalGovernment?.County && (<div><span className='w50'>County</span>: <span className='font500'>{data.LocalGovernment.County}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default LocalGovernment;