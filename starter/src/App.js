import './App.css';
import SearchPage from './Components/SearchPage';
import Library from './Components/Library';
import * as BooksApi from './BooksAPI';
import { React, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
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
      <Routes>
        <Route
          exact
          path='/'
          element={<Library books={books} updateBook={updateBook}></Library>}
        />
        <Route
          exact
          path='/search'
          element={
            <SearchPage userBooks={books} updateBook={updateBook}></SearchPage>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
