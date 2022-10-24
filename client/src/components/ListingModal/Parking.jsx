import React from 'react'

const Parking = (props) => {
    const { data } = props

    return (
        <>
        { data?.Parking && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>Parking</div>
                    <div className='mb1'>
                        { data.Parking?.ParkingFeatures && (<div><span className='w50'>ParkingFeatures</span>: <span className='font500'>{data.Parking.ParkingFeatures}</span></div>)}
                        { data.Parking?.ParkingGarageSpaces && (<div><span className='w50'>ParkingGarageSpaces</span>: <span className='font500'>{data.Parking.ParkingGarageSpaces}</span></div>)}
                        { data.Parking?.ParkingNonGarSpaces && (<div><span className='w50'>ParkingNonGarSpaces</span>: <span className='font500'>{data.Parking.ParkingNonGarSpaces}</span></div>)}
                        { data.Parking?.ParkingTotal && (<div><span className='w50'>ParkingTotal</span>: <span className='font500'>{data.Parking.ParkingTotal}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default Parking;