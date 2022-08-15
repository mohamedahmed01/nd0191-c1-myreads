import { Link } from 'react-router-dom';
import * as BooksApi from '../BooksAPI';
import Book from './Book';
import { useState, useCallback } from 'react';
import * as Utils from '../Utils';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

const SearchPage = ({ userBooks, updateBook }) => {
  const [books, setBooks] = useState([]);
  const [noSearchResults, setNoSearchResults] = useState(false);

  const search = async (query) => {
    const res = await BooksApi.search(query, 20);
    if (!res.error) {
      Utils.mergeByProperty(res, userBooks, 'id');
      setNoSearchResults(false);
      setBooks(res);
    } else {
      setNoSearchResults(true);
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
        {noSearchResults && (
          <h2>Currently there no Books with that search term</h2>
        )}
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
