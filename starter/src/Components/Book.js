import BookShelfChanger from './BookShelfChanger';
import DefaultImage from '../img/default.png';
import PropTypes from 'prop-types';

const Book = ({ book, shelf, updateBook }) => {
  const image = book.imageLinks?.smallThumbnail
    ? 'url(' + book.imageLinks.smallThumbnail + ')'
    : 'url(' + DefaultImage + ')';
  return (
    <li key={book.id}>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: image,
            }}
          ></div>
          <BookShelfChanger
            key={shelf}
            book={book}
            shelf={shelf}
            updateBook={updateBook}
          ></BookShelfChanger>
        </div>
        <div className='book-title'>{book.title}</div>
        {book.authors.map((author) => {
          return <div className='book-authors'>{author}</div>;
        })}
      </div>
    </li>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  updateBook: PropTypes.func.isRequired,
};
export default Book;
