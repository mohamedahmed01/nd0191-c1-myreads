import SearchPageButton from './SearchPageButton';
import Shelf from './Shelf';
import PropTypes from 'prop-types';

const Library = ({ books, updateBook }) => {
  const shelfStatus = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read',
  };

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          {Object.keys(shelfStatus).map((key) => {
            return (
              <Shelf
                key={key}
                books={books.filter((book) => book.shelf === key)}
                shelfStatus={key}
                shelfLabel={shelfStatus[key]}
                updateBook={(book, shelf) => updateBook(book, shelf)}
              ></Shelf>
            );
          })}
        </div>
      </div>
      <SearchPageButton></SearchPageButton>
    </div>
  );
};
Library.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};
export default Library;
