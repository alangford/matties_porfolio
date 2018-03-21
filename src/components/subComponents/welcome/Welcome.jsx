import React from 'react';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button/Button';
import Landscape from 'material-ui-icons/Landscape';
import DownArrow from 'material-ui-icons/ArrowDownward'
import * as portrait from './assets/portrait.jpg';


const Welcome = (props) => {

  const {
    classes,
  } = props;

  const scroll = () => {
    return window.scrollTo({
      "behavior": "smooth",
      "left": 0,
      "top": 600
  });
  
  }



  return (
  <Grid container spacing={8}>
      <Grid item xs={12} className={ classes.centered }>
        <Avatar src={ portrait } className={ classes.portrait } />
      </Grid>
      <Grid item xs={12} className={ classes.centered }>
        <Typography align="center"  color="secondary" variant="display1">
            Hello! my name is 
        </Typography>
      </Grid>
      <Grid item xs={12} className={ classes.centered }>
        <Typography align="center"  color="secondary" variant="display3">
            Andrew Langford
        </Typography>
      </Grid>
      <Grid item xs={12} className={ classes.centered }>
        <Typography align="center"  color="secondary" variant="display1">
            Welcome to my portfolio!
        </Typography>
      </Grid>
      <Grid item xs={6} className={ classes.centered }>
        <Button
            variant="raised"
            color="primary"
            title="Continue"
            onClick={() => scroll()}
          >
            Continue onward! <br/> <DownArrow />
          </Button>
      </Grid>
      <Grid item xs={6} className={ classes.centered }>
        <Button
          variant="raised"
          color="primary"
          title="Go Into VR!"
          href="http://vr.andrewlangford.net"
        >
          Check it out in VR! <br/>   <Landscape />
        </Button>
      </Grid>
  </Grid>
)}

const styles = theme => ({
  portrait: {
    height: 200,
    width: 200
  },
  centered: {
      display: 'flex',
      justifyContent: 'center',
  
  }
  });
  
  
export default withStyles(styles)(Welcome);