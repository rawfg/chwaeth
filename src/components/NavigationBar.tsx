import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SpotifyAvatar from './SpotifyAvatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar classes={{ colorPrimary: 'black', colorDefault: 'red', colorSecondary: 'red' }} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <SpotifyAvatar />
        </Toolbar>
      </AppBar>
    </div>
  );
}