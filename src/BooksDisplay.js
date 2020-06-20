import React from 'react';
import BookShelf from './BookShelf';

const BooksDisplay = ({ books }) => {
  console.log(books);
  return (
    <div>
      <BookShelf books={books} title="Current Reading" />
      <BookShelf books={books} title="Want to Read" />
      <BookShelf books={books} title="Read" />
    </div>
  );
};

export default BooksDisplay;
