import React from 'react'

const UnMapped = (props) => {
    const { data } = props

    return (
        <>
        { data?.UNMAPPED && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>UnMapped</div>
                    <div className='mb1'>
                        { data.UNMAPPED?.LM_Dec_2 && (<div><span className='w50'>LM_Dec_2</span>: <span className='font500'>{data.UNMAPPED.LM_Dec_2}</span></div>)}
                        { data.UNMAPPED?.LM_char10_79 && (<div><span className='w50'>LM_char10_79</span>: <span className='font500'>{data.UNMAPPED.LM_char10_79}</span></div>)}
                        { data.UNMAPPED?.L_InputDate && (<div><span className='w50'>L_InputDate</span>: <span className='font500'>{data.UNMAPPED.L_InputDate}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default UnMapped;