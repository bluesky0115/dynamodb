import React from 'react'

const PhysicalCondition = (props) => {
    const { data } = props

    return (
        <>
        { data?.PhysicalCondition && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>PhysicalCondition</div>
                    <div className='mb1'>
                        { data.PhysicalCondition?.YrBlt && (<div><span className='w50'>YrBlt</span>: <span className='font500'>{data.PhysicalCondition.YrBlt}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default PhysicalCondition;