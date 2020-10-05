import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  jinaHead: {
    height: '20vh',
    width: '100%',
    backgroundColor: '#333e48',
    color: '#fff',
  },
  h1: {
    fontSize: '48px',
  },
}));

const JainFoodHead = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.jinaHead}
      justify="center"
      alignItems="center"
    >
      <h1 className={classes.h1}>ಕನ್ನಡ ಜೈನ್ಸ್</h1>
    </Grid>
  );
};

export default JainFoodHead;
