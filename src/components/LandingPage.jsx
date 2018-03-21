import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card';

import Welcome from './subComponents/welcome/Welcome';
import AboutMe from './subComponents/aboutMe/AboutMe';
import Skills from './subComponents/skills/Skills';
import Projects from './subComponents/projects/Projects';
import Contact from './subComponents/contact/Contact';

class LandingPage extends Component {
  render(){
    const {
      classes,
    } = this.props
    return (
      <Paper
      className={ `${classes.root}` }
      elevation={ 2 }
    > 
    <Grid justify="space-around" container spacing={24}>
      <Grid item xs={12}>
          <Card raised className={ classes.card }>
            <Welcome />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card raised className={ classes.heightCard }>
            <Skills />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card raised className={ classes.heightCard }>
            <AboutMe />
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card raised className={ classes.card }>
            <Projects />
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card raised className={ classes.card }>
            <Contact />
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}
}

const mapStateToProps = state => ({

});

const styles = theme => ({
  root: {
    padding: '1%',
    minHeight: '100vh',
    elevation: '1',
    backgroundColor: theme.palette.secondary['300'],
  },
  card: {
    padding: '2%',
  },
  heightCard:{
    padding: '2%',
    minHeight: '70vh'
  }
});


const LandingPageWithStyle = withStyles(styles)(LandingPage);
export default withRouter(LandingPageWithStyle);


LandingPage.defaultProps = {
  classes: {
    root: '',
    card: '',
  },
};


LandingPage.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    card: PropTypes.string,
  }),
};
