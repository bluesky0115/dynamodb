import React, { useRef } from 'react'

const FactDetail = (props) => {
    const { data } = props
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();

    return (
        <div className='detailItem'>
            { data?.Features && (
                <>
                    <div className='itemOne'>
                        <div className='itemTitle'>Facts and features</div>
                        <div className='mb1'>
                            { data.Features?.Cooling && (<div><span className='w50'>Cooling</span>: <span className='font500'>{data.Features.Cooling}</span></div>)}
                            { data.Features?.Equipment && (<div><span className='w50'>Equipment</span>: <span className='font500'>{data.Features.Equipment}</span> </div>)}
                            { data.Features?.HeatEqpmnt && (<div><span className='w50'>HeatEqpmnt</span>: <span className='font500'>{data.Features.HeatEqpmnt}</span> </div>)}
                            { data.Features?.LandryLctn && (<div><span className='w50'>LandryLctn</span>: <span className='font500'>${data.Features.LandryLctn}</span> </div>)}
                            { data.Features?.SewerSeptc && (<div><span className='w50'>SewerSeptc</span>: <span className='font500'>{data.Features.SewerSeptc}</span></div>)}
                            { data.Features?.Water && (<div><span className='w50'>Water</span>: <span className='font500'>{data.Features.Water}</span></div>)}
                        </div>
                    </div>
                    <hr />
                </>
            )}
            <div className='itemOne'>
                <div className='itemTitle'>Contact Agent</div>
                <div className='mb1'>
                    <span className='font500'>Name</span>
                    <input type='text' className='inputBox' ref={nameRef} />
                </div>
                <div className='mb1'>
                    <span className='font500'>Phone</span>
                    <input type='text' className='inputBox' ref={phoneRef} />
                </div>
                <div className='mb1'>
                    <span className='font500'>Email</span>
                    <input type='text' className='inputBox' ref={emailRef} />
                </div>
                <div className='mb1'>
                    <span className='font500'>Message</span>
                    <textarea 
                        rows='2' 
                        className='inputBox' 
                        defaultValue={`I am interested in ${data.Location['Geo Address Line'] + ', ' + data.Location.City + ', ' + data.Location.State + ' ' + data.Location.Zip}`} ref={msgRef} 
                    />
                </div>
                <div className='btn btnPrimary mb1 w100 font16 fontBold'>Contact Agent</div>
                <div className='mb2 font18 alignCenter'>
                    <input type='checkbox' id='privacyCheck'  />
                    <label htmlFor='privacyCheck'>I want financing information</label>
                </div>
                <div className='font10 colorGray'>
                    By pressing Contact Agent, you agree that Zillow Group and its affiliates, and real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don't need to consent as a condition of buying any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use. Zillow does not endorse any real estate professionals. We may share information about your recent and future site activity with your agent to help them understand what you're looking for in a home.
                </div>
            </div>
            <hr />
        </div> 
    );
}
export default FactDetail;