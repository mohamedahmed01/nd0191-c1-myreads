import SearchPageButton from './SearchPageButton';
import Shelf from './Shelf';

const Library = () => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <Shelf></Shelf>
          <Shelf></Shelf>
        </div>
      </div>
      <SearchPageButton></SearchPageButton>
    </div>
  );
};

export default Library;
