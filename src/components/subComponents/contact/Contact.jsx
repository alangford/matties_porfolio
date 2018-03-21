import React from 'react';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button/Button';

import * as github from './assets/github.png';
import * as linkedin from './assets/linkedin.png';
import * as twitter from './assets/twitter.png';
import * as facebook from './assets/facebook.png';
import * as resume from './assets/resume.pdf';

const Welcome = (props) => {

  const {
    classes,
  } = props;

  return (
  <Grid container spacing={24}>
      <Grid item xs={12} className={ classes.centered }>
      <Typography color="secondary" type="display1">
            Contact
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={ classes.centered }>
        <Typography align="center" color="secondary" type="display1">
            phone: 801-694-7838
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={ classes.centered }>
        <Typography align="center" color="secondary" type="display1">
            email: a.b.l.2142@gmail.com
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={ classes.centered }>
        <Button
          raised
          color="primary"
          title="Download My Resume!"
          onClick={ () => window.open(resume) }
        >
        Download my resume!
        </Button>
      </Grid>
      <Grid item xs={12} className={ classes.centered }>
        <Avatar src={ github } className={ classes.portrait } onClick={() => window.location = 'https://github.com/bolty2142'} />
        <Avatar src={ linkedin } className={ classes.portrait } onClick={() => window.location = 'https://www.linkedin.com/in/andrewbl/'} />
        <Avatar src={ twitter } className={ classes.portrait } onClick={() => window.location = 'https://twitter.com/abl2142'} />
        <Avatar src={ facebook } className={ classes.portrait } onClick={() => window.location = 'https://www.facebook.com/andrew.langford.10'} />
      </Grid>
  </Grid>
)}

const styles = theme => ({
  portrait: {
    height: 50,
    width: 50
  },
  centered: {
      display: 'flex',
      justifyContent: 'space-around',
  
  },
  });
  
  
export default withStyles(styles)(Welcome);