import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import BookCard from './BookCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(0, 2),
  },
  section: {
    padding: theme.spacing(5, 2, 5, 2),
  },
  gridContainer: {
    marginTop: theme.spacing(1),
  },
}));

const BookShelf = ({ books, title, updateShelf }) => {
  const classes = useStyles();
  console.log(books);
  return (
    <div className={classes.section}>
      <div className={classes.root}>
        <Typography variant="h5">{title}</Typography>
        <Divider />
        <Grid container spacing={5} className={classes.gridContainer}>
          {books.map((book) => (
            <Grid item xs={6} sm={4} md={2} lg={2} key={book.id}>
              <BookCard book={book} updateShelf={updateShelf} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default BookShelf;
