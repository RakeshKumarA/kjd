import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Schedule from '../components/Schedule';
import Showcase from '../components/Showcase';
import JinaHead from '../components/JinaHead';
import JinaCards from '../components/JinaCards';
import JainFoodHead from '../components/JainFoodHead';

const useStyles = makeStyles({
  mainparent: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: '100vh',
  },
  parent: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
  },
  header: {
    backgroundColor: '#333e48',
  },
  maincontent1: {
    display: 'grid',
    gridTemplateColumns: 'minmax(150px, 25%) 1fr',
    height: '100%',
  },
  schedule: {
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center',
  },
  showcase: {
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center',
  },
});

const HomeLayout = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.mainparent}>
        <div>
          <Header />
        </div>
        <div className={classes.maincontent1}>
          <div className={classes.schedule}>
            <Schedule />
          </div>
          <div className={classes.showcase}>
            <Showcase />
          </div>
        </div>
      </div>
      <div className={classes.parent}>
        <div>
          <JinaHead />
        </div>
        <div>
          <JinaCards />
        </div>
      </div>
      <div className={classes.parent}>
        <div>
          <JainFoodHead />
        </div>
        <div>
          <JinaCards />
        </div>
      </div>
      <div className={classes.parent}>
        <div className={classes.header}>
          <h1>Jain Food</h1>
        </div>
        <div>Card content on each bimba</div>
      </div>
      <div className={classes.parent}>
        <div className={classes.header}>
          <h1>Sunday Live</h1>
        </div>
        <div>Card content on each bimba</div>
      </div>
    </Fragment>
  );
};

export default HomeLayout;
