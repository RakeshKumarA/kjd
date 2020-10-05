import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import jinabimba1 from '../asset/jinabimba1.jpg';
import jinabimba2 from '../asset/jinabimba2.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 400,
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 140,
  },
  grid: {
    padding: '80px',
  },
  button: {
    margin: '20px 0',
    backgroundColor: '#333e48',
  },
});

const JinaCards = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item container justify="center" alignItems="center">
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={jinabimba1}
                title="Chathurmukha"
              />
              <CardContent>
                <Typography variant="h5" color="initial">
                  ಚತುರ್ಮುಖ
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  ಇದು ನಾಲ್ಕು ಸಮ್ಮಿತೀಯ ಮುಖಗಳನ್ನು ಹೊಂದಿದೆ ಮತ್ತು ಇದನ್ನು ಚತುರ್ಮುಖ
                  ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ (ನಾಲ್ಕು ಮುಖಗಳು) ಬಸಾಡಿ (ಜೈನ ದೇವಾಲಯಗಳನ್ನು
                  ಉಲ್ಲೇಖಿಸಲು ಬಳಸುವ ಪದ ದಕ್ಷಿಣ ಭಾರತ). [1] ಈ ದೇವಾಲಯದಲ್ಲಿ ತೀರ್ಥಂಕರ
                  ಅರನಾಥ್ ಅವರ ಚಿತ್ರಗಳಿವೆ, ಮಲ್ಲಿನಾಥ್ ಮತ್ತು ಮುನಿಸುವರತ್ನಾಥ್. [2]
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={jinabimba2}
                title="Moodbidri"
              />
              <CardContent>
                <Typography variant="h5" color="initial">
                  ಮೂಡ್ಬಿದ್ರಿ
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  ಸವಿರಾ ಕಾಂಬಡ ದೇವಸ್ಥಾನ (ಸವಿರಾ ಕಾಂಬಡ ಬಸಾಡಿ) ಅಥವಾ ತ್ರಿಭುವನ ತಿಲಕ
                  ಕಾಮಸಿ), ಇದು ಬಸದಿ ಅಥವಾ ಜೈನ ದೇವಾಲಯವಾಗಿದೆ ಭಾರತದ ಕರ್ನಾಟಕದ
                  ಮೂಡಬಿದ್ರಿಯಲ್ಲಿ 1000 ಸ್ತಂಭಗಳು.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={jinabimba2}
                title="Moodbidri"
              />
              <CardContent>
                <Typography variant="h5" color="initial">
                  ಮೂಡ್ಬಿದ್ರಿ
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  ಸವಿರಾ ಕಾಂಬಡ ದೇವಸ್ಥಾನ (ಸವಿರಾ ಕಾಂಬಡ ಬಸಾಡಿ) ಅಥವಾ ತ್ರಿಭುವನ ತಿಲಕ
                  ಕಾಮಸಿ), ಇದು ಬಸದಿ ಅಥವಾ ಜೈನ ದೇವಾಲಯವಾಗಿದೆ ಭಾರತದ ಕರ್ನಾಟಕದ
                  ಮೂಡಬಿದ್ರಿಯಲ್ಲಿ 1000 ಸ್ತಂಭಗಳು.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid item container justify="center">
        <Button variant="contained" color="primary" className={classes.button}>
          See More
        </Button>
      </Grid>
    </Grid>
  );
};

export default JinaCards;
