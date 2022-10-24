import React from 'react';
import SaleOrRent from './SaleOrRent';
import Price from './Price';
import BedsAndBaths from './BedsAndBaths';
import HomeType from './HomeType';
import More from './More';

import './index.scss'

const Filters = (props) => {
    const { 
        filterStatus, 
        setFilterStatus
    } = props

    return (
        <div className='filterMain'>
            <SaleOrRent filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
            <Price filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
            <BedsAndBaths filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
            <HomeType filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
            <More filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
        </div>
    )

}

export default Filters;