import Book from './Book';

const Shelf = ({ books, shelfStatus, shelfLabel, updateBook }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelfLabel}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map((book) => {
            return (
              <Book
                key={shelfStatus + book.id}
                book={book}
                shelf={shelfStatus}
                updateBook={updateBook}
              ></Book>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
