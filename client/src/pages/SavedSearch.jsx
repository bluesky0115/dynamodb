import React from 'react';
import { useSession } from '../contexts/SessionContext'
import SavedSearchItem from '../components/Account/SavedSearch/SavedSearchItem';

function SavedSearch() {
  const [{user}] = useSession();

  return (
      <>
        <div className='spaceBetween alignCenter'>
          <h1 className='pageTitle'> Saved searches</h1>
        </div>
        { user && user.savedSearch.map((item, index) => (
          <SavedSearchItem key={index} item={item} index={index}/>
        ))}
      </>
  );
}

export default SavedSearch;