import { Card } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import showcase from '../asset/showcase.jpg';

const useStyles = makeStyles(() => ({
  showcase: {
    height: '70%',
    width: '80%',
    backgroundImage: `url(${showcase})`,
    backgroundRepeat: 'none',
    backgroundPosition: 'center',
  },
}));

const Showcase = () => {
  const classes = useStyles();
  return (
    <Card className={classes.showcase} elevation="5">
      {' '}
    </Card>
  );
};

export default Showcase;
