import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import * as js from './assets/js.png'
import * as reac from './assets/react.png'
import * as angular from './assets/angularjs.png'
import * as jq from './assets/jquery.png'

import * as node from './assets/nodejs.png'
import * as java from './assets/java.jpg'
import * as go from './assets/go.jpg'
import * as ruby from './assets/ruby.png'


import * as mongodb from './assets/mongodb.png'
import * as mysql from './assets/mysql.png'
import * as pg from './assets/postgresqll.png'
import * as sqlite from './assets/sqllite.png'

import * as nginx from './assets/nginx.png'
import * as docker from './assets/docker.png'
import * as aws from './assets/aws.png'

import * as wp from './assets/webpack.png'
import * as gulp from './assets/gulp.png'
import * as git from './assets/git.jpg'


class Skills extends Component {

 

  constructor(){
  super()
    this.state = {
      skills: [
        {id:1, name: 'JavaScript', img: js},
        {id:2, name: 'React.js', img: reac},
        {id:3, name: 'Angular.js', img: angular},
        {id:4, name: 'jQuery', img: jq},
        {id:78, name: 'Node.js', img: node},
        {id:6, name: 'Java', img: java},
        {id:7, name: 'Go', img: go},
        {id:8, name: 'Ruby', img: ruby},
        {id:9, name: 'MongoDB', img: mongodb},
        {id:10, name: 'MySQL', img: mysql},
        {id:11, name: 'PostgreSQL', img: pg},
        {id:12, name: 'SQLlite', img: sqlite},
        {id:13, name: 'NGINX', img: nginx},
        {id:14, name: 'Docker', img: docker},
        {id:15, name: 'AWS', img: aws},
        {id:16, name: 'Webpack', img: wp},
        {id:17, name: 'Gulp', img: gulp},
        {id:18, name: 'Git', img: git},
      ],
      message: 'Hey if you keep deleting my skills I won\'t be able to get a job!',
      modal: false
    }
  }
  handleClose = () => {
    this.setState({ modal: false });
  };

  handleDelete = (data) => {
    const skillData = [...this.state.skills];
    const skillToDelete = skillData.indexOf(data);
    skillData.splice(skillToDelete, 1);
    if (skillData.length === 9) this.setState({ modal: true });
    if (skillData.length === 0) this.setState({ modal: true, message: 'Oh noe! I\'m done for...' });
    this.setState({ skills: skillData });
  };


  render(){
    const {
      classes,
    } = this.props;
    const {
      skills,
      modal,
      message,
    } = this.state;

      return (
      <Grid container spacing={40} >
        <Grid item xs={12} justify="center" className={ classes.centered }>
          <Typography color="secondary" type="display1">
              Skills
          </Typography>
        </Grid>
            { skills.map(val => (
              <Grid key={ val.id } justify="flex-start" className={ classes.centered } item xs={6} md={4} >

              <Avatar className={ classes.icon } src={ val.img } onClick={() => this.handleDelete(val)} />
                <Typography
                  type="headline"
                >
                {val.name}
                </Typography>
              </Grid>
            )) }
        <Dialog
          open={modal}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Warning!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              { message }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Oh Sorry!
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Haha!
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    )
  }
}

const styles = theme => ({
  icon: {
    height: 70,
    width: 70
  },

  centered: {
    display: 'flex',
    'align-items': 'center'
  },
  
  });
  
  
export default withStyles(styles)(Skills);