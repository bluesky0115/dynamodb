import React from 'react'

const HomeDetailItem = (props) => {
    const {icon, title, value} = props
    return (
        <div className='item'>
            <div className='itemIcon'> {icon} </div>
            <div>
                <div className='fontBold'>{title}</div>
                <div>{value}</div>
            </div>
        </div>
    )
}

export default HomeDetailItem;