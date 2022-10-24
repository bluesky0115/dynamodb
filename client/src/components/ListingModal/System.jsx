import React from 'react'

const System = (props) => {
    const { data } = props

    return (
        <>
        { data?.System && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>System</div>
                    <div className='mb1'>
                        { data.System?.CLASS && (<div><span className='w50'>CLASS</span>: <span className='font500'>{data.System.CLASS}</span></div>)}
                        { data.System?.DOM && (<div><span className='w50'>DOM</span>: <span className='font500'>{data.System.DOM}</span></div>)}
                        { data.System?.IDXIncl && (<div><span className='w50'>IDXIncl</span>: <span className='font500'>{data.System.IDXIncl}</span></div>)}
                        { data.System?.IntrntAddr && (<div><span className='w50'>IntrntAddr</span>: <span className='font500'>{data.System.IntrntAddr}</span></div>)}
                        { data.System?.IntrntSynd && (<div><span className='w50'>IntrntSynd</span>: <span className='font500'>{data.System.IntrntSynd}</span></div>)}
                        { data.System?.ListPrice && (<div><span className='w50'>ListPrice</span>: <span className='font500'>{data.System.ListPrice}</span></div>)}
                        { data.System?.ListType && (<div><span className='w50'>ListType</span>: <span className='font500'>{data.System.ListType}</span></div>)}
                        { data.System?.LstDate && (<div><span className='w50'>LstDate</span>: <span className='font500'>{data.System.LstDate}</span></div>)}
                        { data.System?.OrigSysNam && (<div><span className='w50'>OrigSysNam</span>: <span className='font500'>{data.System.OrigSysNam}</span></div>)}
                        { data.System?.PhotoCount && (<div><span className='w50'>PhotoCount</span>: <span className='font500'>{data.System.PhotoCount}</span></div>)}
                        { data.System?.PhotoDate && (<div><span className='w50'>PhotoDate</span>: <span className='font500'>{data.System.PhotoDate}</span></div>)}
                        { data.System?.PhotoId && (<div><span className='w50'>PhotoId</span>: <span className='font500'>{data.System.PhotoId}</span></div>)}
                        { data.System?.PriceDate && (<div><span className='w50'>PriceDate</span>: <span className='font500'>{data.System.PriceDate}</span></div>)}
                        { data.System?.SaleOrRent && (<div><span className='w50'>SaleOrRent</span>: <span className='font500'>{data.System.SaleOrRent}</span></div>)}
                        { data.System?.SrchPrice && (<div><span className='w50'>SrchPrice</span>: <span className='font500'>{data.System.SrchPrice}</span></div>)}
                        { data.System?.Status && (<div><span className='w50'>Status</span>: <span className='font500'>{data.System.Status}</span></div>)}
                        { data.System?.StatusCat && (<div><span className='w50'>StatusCat</span>: <span className='font500'>{data.System.StatusCat}</span></div>)}
                        { data.System?.StatusChangeDate && (<div><span className='w50'>StatusChangeDate</span>: <span className='font500'>{data.System.StatusChangeDate}</span></div>)}
                        { data.System?.StatusDetl && (<div><span className='w50'>StatusDetl</span>: <span className='font500'>{data.System.StatusDetl}</span></div>)}
                        { data.System?.StatusPrc && (<div><span className='w50'>StatusPrc</span>: <span className='font500'>{data.System.StatusPrc}</span></div>)}
                        { data.System?.SystemID && (<div><span className='w50'>SystemID</span>: <span className='font500'>{data.System.SystemID}</span></div>)}
                        { data.System?.UpdtDate && (<div><span className='w50'>UpdtDate</span>: <span className='font500'>{data.System.UpdtDate}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default System;