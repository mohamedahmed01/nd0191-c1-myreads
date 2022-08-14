import Book from './Book';

const Shelf = ({ books, shelfStatus, shelfLabel }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelfLabel}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map((book) => {
            return <Book book={book} shelf={shelfStatus}></Book>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
