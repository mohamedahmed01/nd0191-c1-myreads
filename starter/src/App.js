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
    book.shelf = shelf;
    BooksApi.update(book, shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), book]);
    });
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
