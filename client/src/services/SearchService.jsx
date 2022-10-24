/**
 * Copyright(C) 2022 freelancer.com/AfterHoursTech
 * ALL RIGHTS RESERVED. NOT OPEN SOURCE.
 */
import { useEffect, useState } from 'react';
import Constant from '../Constant';

const API_SEARCH = Constant.API_SEARCH_URL;

function useSearchService(filterState) {

    const [data, setData] = useState();

    function reset() {
        setData(null);
    }

    useEffect(() => {
        if (filterState.keywords === '') return;
        // console.log(filterState);

        reset();
        fetch(Constant.API_SEARCH_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            filterState
          )
        })
          .then(response => response.json())
          .then(data => { setData(data); })
          .catch(error => console.log(error))
      }, [filterState]);

    return data;
}

export { API_SEARCH, useSearchService };