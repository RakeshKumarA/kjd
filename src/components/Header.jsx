import { AppBar, Button, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: '#333e48',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <h2 className={classes.title}>ಕರ್ನಾಟಕದಲ್ಲಿ ಜೈನ ಧರ್ಮ</h2>
        <Button color="inherit">
          <h3>Login</h3>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
