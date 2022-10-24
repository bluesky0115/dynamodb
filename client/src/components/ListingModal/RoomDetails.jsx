import React from 'react'

const RoomDetails = (props) => {
    const { data } = props

    return (
        <>
        { data?.RoomDetails && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>RoomDetails</div>
                    <div className='mb1'>
                        { data.RoomDetails?.DRDim && (<div><span className='w50'>DRDim</span>: <span className='font500'>{data.RoomDetails.DRDim}</span></div>)}
                        { data.RoomDetails?.FRDim && (<div><span className='w50'>FRDim</span>: <span className='font500'>{data.RoomDetails.FRDim}</span></div>)}
                        { data.RoomDetails?.KitDim && (<div><span className='w50'>KitDim</span>: <span className='font500'>{data.RoomDetails.KitDim}</span></div>)}
                        { data.RoomDetails?.LRDim && (<div><span className='w50'>LRDim</span>: <span className='font500'>{data.RoomDetails.LRDim}</span></div>)}
                        { data.RoomDetails?.MBDim && (<div><span className='w50'>MBDim</span>: <span className='font500'>{data.RoomDetails.MBDim}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default RoomDetails;