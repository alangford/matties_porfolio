import React from 'react';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import * as adobe from './assets/adobe.png';
import * as bgs from './assets/bgs.png';
import * as pong from './assets/pong.png';
import * as seek from './assets/seek.png';
import * as tetris from './assets/tetris.png';
import * as vr from './assets/vr.png';
import * as w3 from './assets/w3clone.png';
import * as otl from './assets/otl.png';

const Projects = (props) => {
  const projectList = [
    {id: 8, title: 'VR Portfolio', img: vr, href:'http://vr.andrewlangford.net'},
    {id: 1, title: 'Pong', img: pong, href:'http://pong.andrewlangford.net'},
    {id: 2, title: 'Tetris', img: tetris, href:'http://tetris.andrewlangford.net'},
    {id: 3, title: 'On-The-Line', img: otl, href:'https://github.com/Dream-Team99/On-The-Line-app'},
    {id: 4, title: 'Adobe Clone', img: adobe, href:'http://adobe.andrewlangford.net'},
    {id: 5, title: 'Board Game Shelf', img: bgs, href:'https://www.boardgameshelf.net'},
    {id: 6, title: 'W3Schools Clone', img: w3, href:'http://w3clone.andrewlangford.net'},
    {id: 7, title: 'Seek Adventure App', img: seek, href:'http://seek.andrewlangford.net'},

  ]
  const {
    classes,
  } = props;

  return (
    <Grid container spacing={24} >
        <Grid item xs={12} justify="center" className={ classes.centered }>
          <Typography color="secondary" type="display1">
              Projects
          </Typography>
        </Grid>
        <GridList className={classes.gridList} cols={1.5}>
        {projectList.map(tile => (
          <GridListTile key={tile.img} className={ classes.tile } onClick={() => window.location = tile.href}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList> 
    </Grid>
)}

const styles = theme => ({
  tile: {
    minHeight: '50vh'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    minHeight: '50vh'
  },
  title: {
    color: theme.palette.secondary.light,
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',

}
});
  
  
export default withStyles(styles)(Projects);