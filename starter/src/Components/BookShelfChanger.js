const BookShelfChanger = ({ book, shelf }) => {
  return (
    <div className='book-shelf-changer'>
      <select>
        <option value='none' disabled>
          Move to...
        </option>
        <option
          value='currentlyReading'
          selected={'currentlyReading' === shelf ? 'selected' : null}
        >
          Currently Reading
        </option>
        <option
          value='wantToRead'
          selected={'wantToRead' === shelf ? 'selected' : null}
        >
          Want to Read
        </option>
        <option value='read' selected={'read' === shelf ? 'selected' : null}>
          Read
        </option>
        <option value='none' selected={'none' === shelf ? 'selected' : null}>
          None
        </option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
