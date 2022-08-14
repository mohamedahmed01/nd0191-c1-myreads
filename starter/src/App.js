import './App.css';
import SearchPage from './Components/SearchPage';
import Library from './Components/Library';
import * as BooksApi from './BooksAPI';
import { React, useState, useEffect } from 'react';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksApi.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const updateBook = (book, shelf) => {
    const update = async () => {
      await BooksApi.update(book, shelf);
      const res = await BooksApi.getAll();
      setBooks(res);
    };
    update();
  };

  return (
    <div className='app'>
      {showSearchPage ? (
        <SearchPage></SearchPage>
      ) : (
        <Library books={books} updateBook={updateBook}></Library>
      )}
    </div>
  );
}

export default App;
