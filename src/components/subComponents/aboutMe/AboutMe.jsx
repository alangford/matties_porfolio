import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';



const AboutMe = (props) => {

  const {
    classes,
  } = props;

  return (
  <Grid container spacing={24}>
      <Grid item xs={12} className={ classes.centered }>
        <Typography color="secondary" type="display1">
            About Me
        </Typography>
      </Grid>
      <Grid item xs={12} className={ classes.centered }>
        <Typography align="center" color="secondary" type="headline">
          I started programming a couple of years ago as a hobby because I loved the idea of creating something new and driving innovation forward. 
          I got into it professionally about a year ago and I have never been happier, the problem solving is incredibly fun and the community is fantastic. 
          I want to see my career as a software engineer grow with a company and hope to inspire others to develop and pursue their dreams like I did. 
        </Typography>
      </Grid>
      <Grid item xs={12} className={ classes.centered }>
        <Typography align="center" color="secondary" type="headline">  
          I'm a very optimistic person, and usually annoyingly happy.
          My dogs are my kids, I love to take them on walks and to the dog park. 
          I love to play video games, any game that comes from Blizzard I have a hard time putting down. 
          I'm pretty good with a Yo-Yo and can do some sweet tricks, I also love a good book or graphic novel. 
        </Typography>
      </Grid>
      <Grid item xs={12} className={ classes.centered }>
        <Typography align="center" color="secondary" type="headline">   
          Some of my idols include: Regina Spektor (She is so passionate, positive and optimistic with her music), 
          John Lennon (The idea that one of his songs could bring so much comfort and peace to the world is incredible), 
          Bill Gates (The work he does with his wife in the Bill & Melinda Gates Foundation is spectacular and what he did with Microsoft was amazing) 
          and Ryan Dahl (What he did for the JS community by creating node.js was outstanding and revolutionary)
        </Typography>
      </Grid>
  </Grid>

)}

const styles = theme => ({

  centered: {
      display: 'flex',
      justifyContent: 'center',
  
  }
  });
  
  
export default withStyles(styles)(AboutMe);