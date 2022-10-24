import React from 'react'

const Condo = (props) => {
    const { data } = props

    return (
        <>
        { data?.Condo && (
            <div className='detailItem'> 
                <div className='itemOne'>
                    <div className='itemTitle'>Condo</div>
                    <div className='mb1'>
                        { data.Condo?.Assessments && (<div><span className='w50'>Assessments</span>: <span className='font500'>${data.Condo.Assessments}</span></div>) }
                        { data.Condo?.AssessmentsYN && (<div><span className='w50'>AssessmentsYN</span>: <span className='font500'>${data.Condo.AssessmentsYN}</span></div>) }
                        { data.Condo?.AssociationYN && (<div><span className='w50'>AssociationYN</span>: <span className='font500'>${data.Condo.AssociationYN}</span></div>) }
                        { data.Condo?.HOAFee && (<div><span className='w50'>HOAFee</span>: <span className='font500'>${data.Condo.HOAFee}</span></div>)}
                    </div>
                </div>
                <hr />
            </div> 
        )}
        </>
    );
}
export default Condo;