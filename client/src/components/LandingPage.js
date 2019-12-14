import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import image from '../res/img/img2.jpg'
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton  } from "react-social-login-buttons";
import '../assets/css/LandingPage.css'

class LandingPage extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className="container" style={{height: '100vh', backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
        <div className="title textColor">Welcome to MyLocations</div>
        <div className="subTitle textColor">We'll help you remember all your favorite locations</div>
        <div className="subTitle textColor">Save your own favorite Locations using Google-Maps</div>
        <div className="subTitle textColor">Collect all your favorite Categories</div>
        <div className="subTitle textColor">First, Sign-in:</div>
        <a href="/auth/google" className="button mr-top-5vh">
        <GoogleLoginButton  />
         </a>
         <a href="/auth/facebook"  className="button mr-top-10">
         <FacebookLoginButton />
         </a>
         <a href="/auth/github"  className="button mr-top-10">
         <GithubLoginButton />
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