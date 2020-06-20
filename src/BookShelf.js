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
    margin: theme.spacing(5, 2, 10, 2),
  },
  gridContainer: {
    marginTop: theme.spacing(1),
  },
}));

const BookShelf = ({ books, title }) => {
  const classes = useStyles();
  console.log(books);
  return (
    <div className={classes.section}>
      <div className={classes.root}>
        <Typography variant="h5">{title}</Typography>
        <Divider />
        <Grid container spacing={5} className={classes.gridContainer}>
          {books.map((book) => (
            <Grid item xs={6} sm={3} md={2}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default BookShelf;
