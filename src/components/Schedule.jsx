import { Card, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  table: {
    width: '90%',
  },
  h1: {
    fontSize: '27px',
    margin: '0',
  },
  h2: {
    fontSize: '27px',
    margin: '0',
  },
  h3: {
    fontSize: '24px',
    margin: '0',
  },
  tableheader: {
    backgroundColor: '#333e48',
    color: '#fff',
  },
}));

const Schedule = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.table}
    >
      <Card
        square="true"
        elevation="3"
        variant="outlined"
        className={classes.tableheader}
      >
        <h1 className={classes.h1}>ಕಾರ್ಯಕ್ರಮಗಳು</h1>
      </Card>
      <Card square="true" elevation="3" variant="outlined">
        <h2 className={classes.h2}>ನಮೋಕರ ಮಂತ್ರ</h2>
        <h3 className={classes.h3}>Aug 07</h3>
      </Card>
      <Card square="true" elevation="3" variant="outlined">
        <h2 className={classes.h2}>ಜಿನದರ್ಶನ</h2>
        <h3 className={classes.h3}>Aug 12</h3>
      </Card>
      <Card square="true" elevation="3" variant="outlined">
        <h2 className={classes.h2}>Jain Food</h2>
        <h3 className={classes.h3}>Aug 13</h3>
      </Card>
    </Grid>
  );
};

export default Schedule;
