import { Link } from 'react-router-dom';

const SearchPageButton = () => {
  return (
    <div className='open-search'>
      <Link to='/search'>Add a book</Link>
    </div>
  );
};

export default SearchPageButton;
