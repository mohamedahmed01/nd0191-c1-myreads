import Book from './Book';
import PropTypes from 'prop-types';

const Shelf = ({ books, shelfStatus, shelfLabel, updateBook }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelfLabel}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map((book) => {
            return (
              <Book
                key={shelfStatus + book.id}
                book={book}
                shelf={shelfStatus}
                updateBook={updateBook}
              ></Book>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfStatus: PropTypes.string.isRequired,
  shelfLabel: PropTypes.string.isRequired,
  updateBook: PropTypes.func.isRequired,
};
export default Shelf;
