import PropTypes from 'prop-types';
const BookShelfChanger = ({ book, shelf, updateBook }) => {
  const shelves = [
    {
      id: '1',
      shelfName: 'currentlyReading',
      shelfDisplayName: 'Currently Reading',
    },
    {
      id: '2',
      shelfName: 'wantToRead',
      shelfDisplayName: 'Want to Read',
    },
    {
      id: '3',
      shelfName: 'read',
      shelfDisplayName: 'Read',
    },
    {
      id: '4',
      shelfName: 'none',
      shelfDisplayName: 'None',
    },
  ];

  const SelectChange = (event) => {
    updateBook(book, event.target.value);
  };
  return (
    <div className='book-shelf-changer'>
      <select value={shelf} onChange={SelectChange}>
        <option disabled>Move to...</option>
        {shelves.map(({ shelfName, shelfDisplayName }) => {
          return (
            <option key={shelfName} value={shelfName}>
              {shelfDisplayName}
            </option>
          );
        })}
      </select>
    </div>
  );
};
BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  updateBook: PropTypes.func.isRequired,
};
export default BookShelfChanger;
