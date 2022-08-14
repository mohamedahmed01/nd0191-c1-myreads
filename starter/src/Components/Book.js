import BookShelfChanger from './BookShelfChanger';

const Book = ({ book, shelf, updateBook }) => {
  const url = 'url(' + book.imageLinks.smallThumbnail + ')';
  return (
    <li key={book.id}>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: url,
            }}
          ></div>
          <BookShelfChanger
            key={shelf}
            book={book}
            shelf={shelf}
            updateBook={updateBook}
          ></BookShelfChanger>
        </div>
        <div className='book-title'>{book.title}</div>
        {book.authors.map((author) => {
          return <div className='book-authors'>{author}</div>;
        })}
      </div>
    </li>
  );
};

export default Book;
