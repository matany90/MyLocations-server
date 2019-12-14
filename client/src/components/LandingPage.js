import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import image from '../res/img/img2.jpg'
import GoogleButton from 'react-google-button'
import { Link, Redirect   } from 'react-router-dom'; 
import '../assets/css/LandingPage.css'

class LandingPage extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className="container" style={{height: '100vh', backgroundImage: `url(${image})`}}>
        <div className="title textColor">Welcome to MyLocations</div>
        <div className="subTitle textColor">We'll help you remember all your favorite locations</div>
        <div className="subTitle textColor">Save your own favorite Locations using Google-Maps</div>
        <div className="subTitle textColor">Collect all your favorite Categories</div>
        <a href="/auth/google" className="googleButton">
        <GoogleButton />
         </a>
      </div>
    );
  }
}

const style = theme => ({
  bigAvatar: {
    margin: 10,
    width: 400,
    height: 400,
  },
  bigAvatarContainer: {
    paddingBottom: '10vh',
    paddingTop: '2vh'
  },
  titleStyle: {
    paddingTop: '30px'
  },
})

export default withStyles(style)(LandingPage);