import React, { useState, useEffect } from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import theme from './theme';
import NavBar from './NavBar';
import * as BooksAPI from './BooksAPI';
import BooksDisplay from './BooksDisplay';
import SearchDisplay from './SearchDisplay';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    // position: 'absolute',
    // bottom: theme.spacing(2),
    // right: theme.spacing(2),
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
}));

const App = () => {
  const classes = useStyles();
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
      <div className={classes.root}>
        <Router>
          <Switch>
            <Route exact path="/">
              <div>
                <NavBar />
                <BooksDisplay books={books} updateShelf={updateShelf} />
                <Fab
                  aria-label="Search"
                  className={classes.fab}
                  color="primary"
                >
                  <SearchIcon />
                </Fab>
              </div>
            </Route>
            <Route path="/search">
              <SearchDisplay />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};
export default App;
