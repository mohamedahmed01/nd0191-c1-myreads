import { Link } from 'react-router-dom';
import * as BooksApi from '../BooksAPI';
import Book from './Book';
import { useState } from 'react';
import * as Utils from '../Utils';

const SearchPage = ({ userBooks, updateBook }) => {
  const [books, setBooks] = useState([]);

  const onChange = (event) => {
    const query = event.target.value.length;
    if (query >= 3) {
      const search = async () => {
        const res = await BooksApi.search(event.target.value, 20);
        if (!res.error) {
          const filteredUserBooks = userBooks.filter(
            (book) =>
              book.title.includes(query) ||
              book.authors.includes(query) ||
              JSON.stringify(book.industryIdentifiers).includes(query)
          );

          Utils.mergeByProperty(res, filteredUserBooks, 'id');
          setBooks(res);
        }
      };
      search();
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

export default SearchPage;
