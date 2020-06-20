import React, { useState, useEffect } from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import NavBar from './NavBar';
import * as BooksAPI from './BooksAPI';
import BooksDisplay from './BooksDisplay';

const App = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const updatedBooks = await BooksAPI.getAll();
      setBooks(updatedBooks);
    }
    fetchData();
  }, []);

  const updateShelf = async (book, shelf) => {
    const response = await BooksAPI.update(book, shelf);
    if (response) {
      book.shelf = shelf;
      const updatedBooks = await BooksAPI.getAll();
      setBooks(updatedBooks);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <BooksDisplay books={books} updateShelf={updateShelf} />
    </ThemeProvider>
  );
};
export default App;
