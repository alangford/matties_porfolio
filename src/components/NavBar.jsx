import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


import backGroundImage from './assets/staticBackground.webp';
import navIcon from './assets/navIcon.png';



export const Nav = (props) => {
  const {
    classes,
  } = props;
  return (
    <div className={ classes.root } >
      <div className={classes.navBackgroundImage}>
      <Grid container spacing={8}>
        <Grid item xs={12} className={ classes.centered }>
           <img src={ navIcon } />
        </Grid>
        <Grid item xs={12} className={ classes.centered }>
          <Typography align="center"  color="secondary" variant="display3">
            Madison Langford, BS 
          </Typography>
        </Grid>
        <Grid item xs={12} className={ classes.centered }>
          <Typography align="center"  color="secondary" variant="display1">
            Cell and Molecular Biologist
          </Typography>
        </Grid>
      </Grid>
      </div>
      <AppBar className={ classes.flex } position="static">
        
      </AppBar>
    </div>
  );
};


const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    display: 'flex',
    padding: '20px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.light,
  },
  navBackgroundImage: {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${backGroundImage})`
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',

}
});

const NavBar = withStyles(styles)(Nav);

export default NavBar;

Nav.defaultProps = {
  classes: {
    flex: '',
    primaryText: '',
    root: '',
  },
  name: 'foo',
  logout: () => null,
};

Nav.propTypes = {
  classes: PropTypes.shape({
    flex: PropTypes.string.isRequired,
    primaryText: PropTypes.string,
    root: PropTypes.string.isRequired,
  }),
  name: PropTypes.string,
  logout: PropTypes.func,
};

