import React from 'react'

const Exterior = (props) => {
    const { data } = props

    return (
        <>
        { data?.Exterior && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>Exterior</div>
                    <div className='mb1'>
                        { data.Exterior?.BStry && (<div><span className='w50'>BStry</span>: <span className='font500'>{data.Exterior.BStry}</span></div>)}
                        { data.Exterior?.BldgUnits && (<div><span className='w50'>BldgUnits</span>: <span className='font500'>{data.Exterior.BldgUnits}</span></div>)}
                        { data.Exterior?.CmplxUnits && (<div><span className='w50'>CmplxUnits</span>: <span className='font500'>{data.Exterior.CmplxUnits}</span></div>)}
                        { data.Exterior?.Exterior && (<div><span className='w50'>Exterior</span>: <span className='font500'>{data.Exterior.Exterior}</span></div>)}
                        { data.Exterior?.Fencing && (<div><span className='w50'>Fencing</span>: <span className='font500'>{data.Exterior.Fencing}</span></div>)}
                        { data.Exterior?.HeatSource && (<div><span className='w50'>HeatSource</span>: <span className='font500'>{data.Exterior.HeatSource}</span></div>)}
                        { data.Exterior?.LotSz && (<div><span className='w50'>LotSz</span>: <span className='font500'>{data.Exterior.LotSz}</span></div>)}
                        { data.Exterior?.Pool && (<div><span className='w50'>Pool</span>: <span className='font500'>{data.Exterior.Pool}</span></div>)}
                        { data.Exterior?.Roof && (<div><span className='w50'>Roof</span>: <span className='font500'>{data.Exterior.Roof}</span></div>)}
                        { data.Exterior?.Stry && (<div><span className='w50'>Stry</span>: <span className='font500'>{data.Exterior.Stry}</span></div>)}
                        { data.Exterior?.Style && (<div><span className='w50'>Style</span>: <span className='font500'>{data.Exterior.Style}</span></div>)}
                        { data.Exterior?.Topography && (<div><span className='w50'>Topography</span>: <span className='font500'>{data.Exterior.Topography}</span></div>)}
                        { data.Exterior?.TotalStories && (<div><span className='w50'>TotalStories</span>: <span className='font500'>{data.Exterior.TotalStories}</span></div>)}
                        { data.Exterior?.UnitElev && (<div><span className='w50'>UnitElev</span>: <span className='font500'>{data.Exterior.UnitElev}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default Exterior;