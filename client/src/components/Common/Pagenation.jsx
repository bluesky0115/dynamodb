import React, { useState, useEffect, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import './Pagenation.scss';

const Pagenation = (props) => {
  const {
    currentPage,
    totalPages,
    handleChangePage
  } = props

  const [visiblePages, setVisiblePages] = useState([])
  const [activePage, setActivePage] = useState(currentPage)

  const filterPages = (visiblePages, totalPages) => {
    return visiblePages.filter(page => page <= totalPages)
  }

  const getVisiblePages = useCallback((page, total) => {
    if (total < 7) {
      return filterPages([1, 2, 3, 4, 5, 6], total)
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [1, page - 1, page, page + 1, total]
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total]
      } else {
        return [1, 2, 3, 4, 5, total]
      }
    }
  }, [])

  const changePage = (page) => {
    if (page === activePage) {
      return
    }
    setActivePage(page)
    const _visiblePages = getVisiblePages(page, totalPages)
    setVisiblePages(filterPages(_visiblePages, totalPages))
    handleChangePage(page)
  }

  useEffect(() => {
    if (!totalPages) return
    setVisiblePages(getVisiblePages(null, totalPages))
  }, [totalPages, getVisiblePages])

  useEffect(() => {
    setActivePage(currentPage)
    const _visiblePages = getVisiblePages(currentPage, totalPages)
    setVisiblePages(filterPages(_visiblePages, totalPages))
  }, [currentPage, totalPages, getVisiblePages])

  return (
      <div className='PagenationContainer'>
        <div className={`PageBtn ${activePage === 1 ? 'disabled' : ''}`}
          onClick={() => (activePage !== 1) && changePage(activePage - 1)}
        >
          <FiChevronLeft />
        </div>

        {visiblePages.map((page, index, array) => (
          <React.Fragment key={page}>
            {array[index - 1] + 2 <= page ? (
              <>
                <div className='PageDot'>
                  ...
                </div>
                <div className={`PageBtn ${activePage === page ? 'active' : ''}`}
                  onClick={() => changePage(page)}
                >
                  {page}
                </div>
              </>
            ) : (
              <div className={`PageBtn ${activePage === page ? 'active' : ''}`}
                onClick={() => changePage(page)}
              >
                {page}
              </div>
            )}
          </React.Fragment>
        ))}

        <div className={`PageBtn ${activePage === totalPages ? 'disabled' : ''}`}
          onClick={() => (activePage !== totalPages) && changePage(activePage + 1)}
        >
          <FiChevronRight />
        </div>
      </div>
    )
}

export default Pagenation;