import { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import { ItemBubbleContent } from './ItemBubbleContent'
import { useWindowSize } from '../hooks/useWindowSize'
import { ModalStyle } from './Common/Modal.Style';
import './ItemBubble.scss';

Modal.setAppElement('body');

const checkFile = () => {
  try {
    return require("./ListingModal")
  } catch (err) {
    return null;
  }
};
const ListingModal = checkFile() ? checkFile().default : null;

const ItemBubble = ({ item, duplicatedItems }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const modalRef = useRef(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState([])
  const { width } = useWindowSize();

  const numFormatter = num => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(0) + "K" // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(2) + "M" // convert to M for number from > 1 million
    } else if (num < 900) {
      return num // if value < 1000, nothing to do
    }
  }

  const openInfo = () => setIsInfoOpen(true)
  const closeInfo = () => setIsInfoOpen(false)

  const openModal = (clickedItem) => {
    setSelectedItem(clickedItem)
    setModalIsOpen(true)  
  }

  const closeModal = () =>{
    setModalIsOpen(false)  
  }

  useEffect(() => {
      window.addEventListener('click', handleOutClick);
      return () => window.removeEventListener('click', handleOutClick);
  },[])

  const handleOutClick = (e) => {
    if(modalRef?.current?.contains(e.target)) return
    setIsInfoOpen(false);
}

  return (
    <>
      <div
        style={{
          minWidth: 48,
          width: "max-content",
          height: "auto",
          backgroundColor: item.isSecondaryResult ? "gray" : "green",
          padding: 2,
          fontSize: 12,
          color: "#ffffff",
          textAlign: "center"
        }}
        ref={modalRef}
        onClick={openInfo}
        onMouseOut={closeInfo}
        onMouseOver={openInfo}
        className="marker"
      >
        {duplicatedItems.length > 1
          ? duplicatedItems.length + " Listings"
          : numFormatter(item.displayPrice)}

        { width > 700 && 
          <div
            className="popOutDiv"
            style={{ display: isInfoOpen ? "block" : "none" }}
          >
            <ItemBubbleContent openModal={openModal} duplicatedItems={duplicatedItems} isInfoOpen={isInfoOpen}/>
          </div>
        }
        { width<=700 &&
            <Modal
              isOpen={isInfoOpen}
              style={{
                overlay: ModalStyle.overlay,
                content: {
                  ...ModalStyle.content,
                  width: '400px',
                  overflow: 'auto'
                }
              }}
            >
              <ItemBubbleContent openModal={openModal} duplicatedItems={duplicatedItems} isInfoOpen={isInfoOpen}/>
            </Modal>
        }
      </div>
      
      { ListingModal &&
        <Modal
          isOpen={modalIsOpen}
          style={{
            overlay: ModalStyle.overlay,
            content: {
              ...ModalStyle.content,
              width: '1300px'
            }
          }}
        >
          <ListingModal
            itemId={selectedItem.id}
            closeModal={closeModal}
          />
        </Modal>
      }
    </>
  )
}

export { ItemBubble }
