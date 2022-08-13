import './App.css';
import { React, useState } from 'react';
import SearchPage from './Components/SearchPage';
import Library from './Components/Library';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className='app'>
      {showSearchPage ? <SearchPage></SearchPage> : <Library></Library>}
    </div>
  );
}

export default App;
