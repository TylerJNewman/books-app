import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    position: 'relative',
  },
  media: {
    height: 0,
    paddingTop: '148.29%',
  },
  bookShelfChanger: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 40,
    height: 40,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const BookCard = ({ book }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {book ? (
        <div className={classes.root}>
          <Card>
            <CardMedia
              className={classes.media}
              image={book.imageLinks.thumbnail}
              title={book.title}
            />
            <Fab
              aria-controls="simple-menu"
              aria-haspopup="true"
              color="primary"
              aria-label="add"
              className={classes.bookShelfChanger}
              onClick={handleClick}
            >
              <AddIcon />
            </Fab>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Currently Reading</MenuItem>
              <MenuItem onClick={handleClose}>Want to Read</MenuItem>
              <MenuItem onClick={handleClose}>Read</MenuItem>
              <MenuItem onClick={handleClose}>None</MenuItem>
            </Menu>
          </Card>
        </div>
      ) : null}
    </>
  );
};

export default BookCard;
