import React from 'react'

const ListingSource = (props) => {
    const { data } = props

    return (
        <>
        { data?.ListingSource && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>ListingSource</div>
                    <div className='mb1'>
                        { data.ListingSource?.AssocID && (<div><span className='w50'>AssocID</span>: <span className='font500'>{data.ListingSource.AssocID}</span></div>)}
                        { data.ListingSource?.LA1FirstNm && (<div><span className='w50'>LA1FirstNm</span>: <span className='font500'>{data.ListingSource.LA1FirstNm}</span></div>)}
                        { data.ListingSource?.LA1LastNam && (<div><span className='w50'>LA1LastNam</span>: <span className='font500'>{data.ListingSource.LA1LastNam}</span></div>)}
                        { data.ListingSource?.ListOfc1 && (<div><span className='w50'>ListOfc1</span>: <span className='font500'>{data.ListingSource.ListOfc1}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default ListingSource;