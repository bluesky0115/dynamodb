import React from 'react'

const LastModified = (props) => {
    const { data } = props

    return (
        <>
        { data?._LastModified && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>LastModified</div>
                    <div className='mb1'>
                        { data._LastModified?.canonicalSlug && (<div><span className='w50'>canonicalSlug</span>: <span className='font500'>{data._LastModified.canonicalSlug}</span></div>)}
                        { data._LastModified?.entityTag && (<div><span className='w50'>entityTag</span>: <span className='font500'>{data._LastModified.entityTag}</span></div>)}
                        { data._LastModified?.latestSystemID && (<div><span className='w50'>latestSystemID</span>: <span className='font500'>{data._LastModified.latestSystemID}</span></div>)}
                        { data._LastModified?.sourceSystem && (<div><span className='w50'>sourceSystem</span>: <span className='font500'>{data._LastModified.sourceSystem}</span></div>)}
                        { data._LastModified?.updtDate && (<div><span className='w50'>updtDate</span>: <span className='font500'>{data._LastModified.updtDate}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default LastModified;