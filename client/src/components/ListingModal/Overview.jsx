import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react';
import Autocomplete from "react-google-autocomplete";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCarSide } from 'react-icons/fa';
import ToggleSwitch from '../Common/ToggleSwitch';

import 'swiper/css';
import 'swiper/css/navigation';

import './Overview.scss';

const OverviewDetail = (props) => {
    const { data } = props
    const WEEK_ARRAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const MONTH_ARRAY = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

    const [isAutoCompleteChecked, setIsAutoCompleteChecked] = useState(false);
    const [tour, setTour] = useState(0);
    const [dayAndWeek, setDayAndWeek] = useState([]);
    const [preferedDate, setPreferedDate] = useState({});

    const renderMarkers = (map, maps) => {
        new maps.Marker({
          position:{
            lat: parseFloat(data.Location['Geo Latitude'] ?? 0),
            lng: parseFloat(data.Location['Geo Longitude'] ?? 0)
          },
          map,
          title: data.Location.Zip
        });
    }

    const toggleSwitch = (toggle) => {
        setIsAutoCompleteChecked(toggle);
    }

    const handleTourClick = (v) => {
        setTour(v);
    }

    const handleClickPreferedDate = (v) => {
        setPreferedDate(v);
    }

    useEffect(() => {
        let nextDay = new Date();
        const newArray=[];
        for(let i=0;i<7;i++){
            nextDay.setDate(new Date().getDate() + i)
            const itemObj = {
                day : nextDay.getDay(),
                year : nextDay.getYear(),
                month : nextDay.getMonth(),
                date : nextDay.getDate(),
            }
            newArray.push(itemObj)
        }
        setDayAndWeek(newArray)
    },[])

    const preferedTime = [];
    for(let i=9;i<=18;i++){
        let d = i, st = 'Am', v = '', dst = '';
        if(i>12) d = i - 12;
        if(i>11) st = 'Pm';
        dst = d.toString() + ':00 '+st;
        v = i.toString() + ':00';
        preferedTime.push(<option value={v} key={dst}>{dst}</option>)

        dst = d.toString() + ':30 '+st;
        v = i.toString() + ':30';
        preferedTime.push(<option value={v} key={dst}>{dst}</option>)
    }

    return (
        <div className='detailItem'> 
            <div className='itemOne'>
                <div className='mb2 getLoan p-relative'>
                    <img src="/images/get-loan.svg" className='mr10' alt=''/>
                    <div>
                        <div className='fontBold'>Get pre-qualified for a loan</div>
                        <div className='mb1'>Talking to a lender early to get pre-qualified for a mortgage can give you an advantage in a competitive market.</div>
                        <div className='blueBoldUnderline'>Find a lender</div>
                    </div>
                    <div className='shortDes'>Zillow Group Marketplace, Inc. NMLS #1303160</div>
                </div>
                <div className='mb2 google-map'>
                    <GoogleMapReact
                        yesIWantToUseGoogleMapApiInternals
                        bootstrapURLKeys={{ key: 'AIzaSyDy4vJLsIMYYK8_CyTGciCUtsA2_87DXWg', libraries: 'places' }}
                        defaultCenter={[parseFloat(data.Location['Geo Latitude'] ?? 0), parseFloat(data.Location['Geo Longitude'] ?? 0)]}
                        defaultZoom={12}
                        onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
                    >
                    </GoogleMapReact>
                </div>
                <div className='mb1 fontBold font20 alignCenter'>
                    Travel times
                    <ToggleSwitch
                        defaultChecked={isAutoCompleteChecked}
                        onChange={toggleSwitch}
                    />
                </div>
                {   isAutoCompleteChecked && (
                        <div className='mb2'>
                            <div className='inlineInputContainer'>
                                <span className='inlinePre'><FaCarSide /></span>
                                <Autocomplete
                                    apiKey='AIzaSyDy4vJLsIMYYK8_CyTGciCUtsA2_87DXWg'
                                    onPlaceSelected={(place) => {
                                        console.log(place);
                                    }}
                                    types={['(regions)']}
                                    className='nextInputBox inputBox'
                                />                            
                            </div>
                        </div> )
                }
            </div>
            <hr/>
            <div className='itemOne'>
                <div className='itemTitle'>Overview</div>
                { data.Overview?.Rem && <div className='mb1'>{data.Overview.Rem}</div> }
                <div className='mb1'>
                    {data.Overview?.AgeRestr && <div><span className='w50'>AgeRestr</span>: <span className='font500'>{data.Overview.AgeRestr}</span></div>}
                    {data.Overview?.LVTDate && <div><span className='w50'>LVTDate</span>: <span className='font500'>{data.Overview.LVTDate}</span> </div>}
                    {data.Overview?.MandRem && <div><span className='w50'>MandRem</span>: <span className='font500'>{data.Overview.MandRem}</span> </div>}
                    {data.Overview?.PriPerSQFT && <div><span className='w50'>PriPerSQFT</span>: <span className='font500'>${data.Overview.PriPerSQFT}</span> </div>}
                    {data.Overview['Residential Sub-Category'] && <div><span className='w50'>Residential Sub-Category</span>: <span className='font500'>{data.Overview['Residential Sub-Category']}</span></div>}
                </div>
            </div>
            <hr/>
            <div className='itemOne'>
                <div className='itemTitle'>Take a Tour with a Buyer's Agent</div>
                <div className='mb2'>
                    <div className={`w50 whiteBtn btn btnPre ${tour === 1 ? 'active' : ''}`} onClick={() => handleTourClick(1)}>In-peron</div>
                    <div className={`w50 whiteBtn btn btnNext ${tour === 2 ? 'active' : ''}`} onClick={() => handleTourClick(2)}>Video-chat</div>
                </div>
                <div className='mb2 fontBold'>Select a preferred time</div>
                <div className='mb2 preferedDay'>
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={10}
                        slidesPerView={4}
                        navigation
                    >
                        { dayAndWeek && (
                            dayAndWeek.map((item, index) => 
                                <SwiperSlide key={index}>
                                    <div className={`w50 whiteBtn btn w100 ${preferedDate === item ? 'active' : ''}`} onClick={() => handleClickPreferedDate(item)}>
                                        {WEEK_ARRAY[item.day]} <br />
                                        {MONTH_ARRAY[item.month-1] + ' ' + item.date}
                                    </div>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>            
                </div>
                <div className='textCenter mb2'>
                    <select className='inputBox'>
                        {preferedTime}
                    </select>
                </div>
                <div className='btn btnPrimary w100 font16 fontBold' onClick={()=> alert('the Request this time button was clicked!')}>
                    Request this time
                </div>
            </div>
            <hr/>
        </div> 
    );
}
export default OverviewDetail;