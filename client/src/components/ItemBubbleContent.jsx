import React from 'react';

const ItemBubbleContent = (props) => {

    const {openModal, duplicatedItems, isInfoOpen } = props
    const numFormatter = num => {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(0) + "K" // convert to K for number from > 1000 < 1 million
        } else if (num > 1000000) {
            return (num / 1000000).toFixed(2) + "M" // convert to M for number from > 1 million
        } else if (num < 900) {
            return num // if value < 1000, nothing to do
        }
    }

    return (
        <div className="popContainer">
          {duplicatedItems.map((duplicatedItem, index) => (
              <div className="popItems" key={index}>
                <div className='cursorPointer' onClick={() => openModal(duplicatedItem)}>
                  <img
                    data-id={duplicatedItem.id}
                    className="popImg"
                    src={isInfoOpen ? duplicatedItem.photoUrl : ""}
                    alt={`Listing ${duplicatedItem.id}`}
                  />
                </div>
                <div className="popDetail">
                  <div className="popDetailTitle">
                    <div className="fontBold">
                        {duplicatedItem.address +
                          (duplicatedItem.unit !== undefined
                            ? " #" + duplicatedItem.unit
                            : "")}
                    </div>
                    <div>{duplicatedItem.city}</div>
                  </div>
                  <div> ${numFormatter(duplicatedItem.displayPrice)}</div>
                  <div className="roomsLine"> <span>{duplicatedItem.bedrooms}</span> <img src="/images/bed-7.svg" alt='' />
                    <span>{(duplicatedItem.halfBathrooms||0) + duplicatedItem.fullBathrooms}</span>  <img src="/images/toilet-svgrepo-com.svg" alt=''/>
                    <span>{duplicatedItem.fullBathrooms || 0}</span>  <img src="/images/bathroom-svgrepo-com.svg" alt=''/>
                    {
                      duplicatedItem.squareFeet && 
                        <>
                          <span>~{duplicatedItem.squareFeet}</span>
                          <img src="/images/square-layout-with-boxes-svgrepo-com.svg" alt=''/>
                        </>
                    }
                    </div>
                </div>
              </div>

          ))}
        </div>
    )
}

export { ItemBubbleContent }
