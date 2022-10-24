import React from 'react'

const Location = (props) => {
    const { data } = props

    return (
        <>
        { data?.Location && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>Location</div>
                    <div className='mb1'>
                        { data.Location?.AddSrchNum && (<div><span className='w50'>AddSrchNum</span>: <span className='font500'>{data.Location.AddSrchNum}</span></div>)}
                        { data.Location?.AddrNumber && (<div><span className='w50'>AddrNumber</span>: <span className='font500'>{data.Location.AddrNumber}</span></div>)}
                        { data.Location?.AddrStreet && (<div><span className='w50'>AddrStreet</span>: <span className='font500'>{data.Location.AddrStreet}</span></div>)}
                        { data.Location?.Address && (<div><span className='w50'>Address</span>: <span className='font500'>{data.Location.Address}</span></div>)}
                        { data.Location?.City && (<div><span className='w50'>City</span>: <span className='font500'>{data.Location.City}</span></div>)}
                        { data.Location?.Cmplx && (<div><span className='w50'>Cmplx</span>: <span className='font500'>{data.Location.Cmplx}</span></div>)}
                        { data.Location?.Community && (<div><span className='w50'>Community</span>: <span className='font500'>{data.Location.Community}</span></div>)}
                        { data.Location?.CrossSt && (<div><span className='w50'>CrossSt</span>: <span className='font500'>{data.Location.CrossSt}</span></div>)}
                        { data.Location?.FllAdd && (<div><span className='w50'>FllAdd</span>: <span className='font500'>{data.Location.FllAdd}</span></div>)}
                        { data.Location['Geo Address Line'] && (<div><span className='w50'>Geo Address Line</span>: <span className='font500'>{data.Location['Geo Address Line']}</span></div>)}
                        { data.Location['Geo Latitude'] && (<div><span className='w50'>Geo Latitude</span>: <span className='font500'>{data.Location['Geo Latitude']}</span></div>)}
                        { data.Location['Geo Longitude'] && (<div><span className='w50'>Geo Longitude</span>: <span className='font500'>{data.Location['Geo Longitude']}</span></div>)}
                        { data.Location['Geo Match Code'] && (<div><span className='w50'>Geo Match Code</span>: <span className='font500'>{data.Location['Geo Match Code']}</span></div>)}
                        { data.Location['Geo Matched Method'] && (<div><span className='w50'>Geo Matched Method</span>: <span className='font500'>{data.Location['Geo Matched Method']}</span></div>)}
                        { data.Location['Geo Postal Code'] && (<div><span className='w50'>Geo Postal Code</span>: <span className='font500'>{data.Location['Geo Postal Code']}</span></div>)}
                        { data.Location['Geo Primary City'] && (<div><span className='w50'>Geo Primary City</span>: <span className='font500'>{data.Location['Geo Primary City']}</span></div>)}
                        { data.Location['Geo Quality'] && (<div><span className='w50'>Geo Quality</span>: <span className='font500'>{data.Location['Geo Quality']}</span></div>)}
                        { data.Location['Geo Subdivision'] && (<div><span className='w50'>Geo Subdivision</span>: <span className='font500'>{data.Location['Geo Subdivision']}</span></div>)}
                        { data.Location['Geo Update Timestamp'] && (<div><span className='w50'>Geo Update Timestamp</span>: <span className='font500'>{data.Location['Geo Update Timestamp']}</span></div>)}
                        { data.Location['Geo Zoom Level'] && (<div><span className='w50'>Geo Zoom Level</span>: <span className='font500'>{data.Location['Geo Zoom Level']}</span></div>)}
                        { data.Location?.IntAddr && (<div><span className='w50'>IntAddr</span>: <span className='font500'>{data.Location.IntAddr}</span></div>)}
                        { data.Location?.MarketArea && (<div><span className='w50'>MarketArea</span>: <span className='font500'>{data.Location.MarketArea}</span></div>)}
                        { data.Location?.Neighborhd && (<div><span className='w50'>Neighborhd</span>: <span className='font500'>{data.Location.Neighborhd}</span></div>)}
                        { data.Location?.State && (<div><span className='w50'>State</span>: <span className='font500'>{data.Location.State}</span></div>)}
                        { data.Location?.Zip && (<div><span className='w50'>Zip</span>: <span className='font500'>{data.Location.Zip}</span></div>)}
                        { data.Location?.ZipArea && (<div><span className='w50'>ZipArea</span>: <span className='font500'>{data.Location.ZipArea}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default Location;