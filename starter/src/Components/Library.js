import SearchPageButton from './SearchPageButton';
import Shelf from './Shelf';
import * as BooksApi from '../BooksAPI';
import { useState, useEffect } from 'react';

const Library = () => {
  const shelfStatus = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read',
    none: 'None',
  };

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksApi.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);
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
                books={books.filter((book) => book.shelf === key)}
                shelfStatus={key}
                shelfLabel={shelfStatus[key]}
              ></Shelf>
            );
          })}
        </div>
      </div>
      <SearchPageButton></SearchPageButton>
    </div>
  );
};

export default Library;
