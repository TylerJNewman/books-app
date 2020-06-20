import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    overflow: 'unset',
  },
  media: {
    height: 0,
    paddingTop: '148.29%',
    position: 'relative',
  },
  bookShelfChanger: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 40,
    height: 40,
  },
  cardContent: {
    padding: '16px 0px',
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
        <>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={book.imageLinks.thumbnail}
              title={book.title}
            >
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
            </CardMedia>
          </Card>
          <CardContent className={classes.cardContent}>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="h2"
              style={{ fontStyle: 'bold' }}
            >
              {book.title}
            </Typography>
            <Typography variant="caption" color="textSecondary" component="p">
              {book.subtitle}
            </Typography>
          </CardContent>
        </>
      ) : null}
    </>
  );
};

export default BookCard;
