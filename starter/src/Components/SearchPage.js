import { Link } from 'react-router-dom';
import * as BooksApi from '../BooksAPI';
import Book from './Book';
import { useState, useCallback } from 'react';
import * as Utils from '../Utils';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

const SearchPage = ({ userBooks, updateBook }) => {
  const [books, setBooks] = useState([]);

  const search = async (query) => {
    const res = await BooksApi.search(query, 20);
    if (!res.error) {
      const filteredUserBooks = userBooks.filter(
        (book) =>
          book.title.includes(query) ||
          book.authors.includes(query) ||
          JSON.stringify(book.industryIdentifiers).includes(query)
      );

      Utils.mergeByProperty(res, filteredUserBooks, 'id');
      setBooks(res);
    } else {
      setBooks([]);
    }
  };

  const debouncedSearch = useCallback(
    debounce((query) => search(query), 500),
    []
  );

  const onChange = (event) => {
    const query = event.target.value;
    if (query === '') {
      setBooks([]);
    } else if (query.length >= 3) {
      debouncedSearch(query);
    }
  };
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title, author, or ISBN'
            onChange={onChange}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {books.map((book) => {
            return (
              <Book
                book={book}
                shelf={book.shelf ? book.shelf : 'none'}
                updateBook={updateBook}
              ></Book>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  userBooks: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};
export default SearchPage;
