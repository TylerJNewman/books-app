import React from 'react';
import BookShelf from './BookShelf';

const bookShelves = [
  { title: 'Currently Reading', name: 'currentlyReading' },
  { title: 'Want to Read', name: 'wantToRead' },
  { title: 'Read', name: 'read' },
];

const BooksDisplay = ({ books, updateShelf }) => (
  <div>
    {bookShelves.map((shelf) => {
      const fliteredBooks = books.filter((book) => book.shelf === shelf.name);
      return (
        <BookShelf
          books={fliteredBooks}
          title={shelf.title}
          updateShelf={updateShelf}
          key={shelf.name}
        />
      );
    })}
  </div>
);

export default BooksDisplay;
