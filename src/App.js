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
      const books = await BooksAPI.getAll();
      setBooks(books);
    }
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <BooksDisplay books={books} />
    </ThemeProvider>
  );
};
export default App;
