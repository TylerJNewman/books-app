import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    marginLeft: 0,
    width: '100%',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
}));

export default function SearchDisplay({ updateShelf }) {
  const classes = useStyles();
  const history = useHistory();

  const [books, setBooks] = useState([]);

  function navigateBack() {
    history.push('/');
  }

  const handleSearch = async (event) => {
    const searchQuery = event.target.value;
    if (searchQuery === '') {
      setBooks([]);
      return;
    }
    const queryResults = await BooksAPI.search(searchQuery);
    if (queryResults.length > 0) {
      setBooks(queryResults);
    } else {
      setBooks([]);
    }
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={navigateBack}
            >
              <ArrowBackIcon />
            </IconButton>
            <div className={classes.search}>
              <InputBase
                placeholder="Search by title or author"
                classes={{
                  root: classes.inputRoot,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <BookShelf books={books} updateShelf={updateShelf} />
    </>
  );
}
