import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CategoryIcon from '@material-ui/icons/Category';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom'; 
import { withRouter } from 'react-router-dom';

class BottomNav extends Component {
  render() {
    const { classes, location } = this.props;
    if (location.pathname !== '/') {
      return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <Button
              color="inherit"
              component={Link}
              className={classes.button}
              to="/categories">
              <CategoryIcon className={classes.extendedIcon} />
              Categories
              </Button>
            <Button
              color="inherit"
              component={Link}
              to="/locations"
              className={classes.button}
            >
              <LocationOnIcon className={classes.extendedIcon} />
              Locations
              </Button>
          </Toolbar>
        </AppBar>
  );
    }
    
    return null;
  }
}

const styles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  button: {
    margin: '0 auto',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  });

export default withStyles(styles)(withRouter(BottomNav));