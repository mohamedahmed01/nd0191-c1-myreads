import { useState } from 'react';

const SearchPageButton = () => {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className='open-search'>
      <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
    </div>
  );
};

export default SearchPageButton;
