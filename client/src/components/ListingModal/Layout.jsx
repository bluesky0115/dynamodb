import React from 'react'

const Layout = (props) => {
    const { data } = props

    return (
        <>
        { data?.Layout && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>Layout</div>
                    <div className='mb1'>
                        { data.Layout?.Beds && (<div><span className='w50'>Beds</span>: <span className='font500'>{data.Layout.Beds}</span></div>)}
                        { data.Layout?.EstSF && (<div><span className='w50'>EstSF</span>: <span className='font500'>{data.Layout.EstSF}</span></div>)}
                        { data.Layout?.FB && (<div><span className='w50'>FB</span>: <span className='font500'>{data.Layout.FB}</span></div>)}
                        { data.Layout?.LndryUtlts && (<div><span className='w50'>LndryUtlts</span>: <span className='font500'>{data.Layout.LndryUtlts}</span></div>)}
                        { data.Layout?.NumHB && (<div><span className='w50'>NumHB</span>: <span className='font500'>{data.Layout.NumHB}</span></div>)}
                        { data.Layout?.OptBeds && (<div><span className='w50'>OptBeds</span>: <span className='font500'>{data.Layout.OptBeds}</span></div>)}
                        { data.Layout?.SerchblRms && (<div><span className='w50'>SerchblRms</span>: <span className='font500'>{data.Layout.SerchblRms}</span></div>)}
                        { data.Layout?.TotB && (<div><span className='w50'>TotB</span>: <span className='font500'>{data.Layout.TotB}</span></div>)}
                        { data.Layout?.TotBds && (<div><span className='w50'>TotBds</span>: <span className='font500'>{data.Layout.TotBds}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default Layout;