import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import image from '../res/img/img2.jpg'
import Button from '@material-ui/core/Button';

const LandingPage = ({ classes }) => (
            <Grid container justify="center" alignItems="center" direction="column">
            <Typography variant="h4" gutterBottom className={classes.titleStyle}>
            Welcome to MyLocations
            </Typography>
            <Typography variant="h6" gutterBottom>
            We'll help you remember all your favorite locations
            </Typography>
            <Typography variant="h6" gutterBottom>
            Save your own favorite Locations using Google-Maps
            </Typography>
            <Typography variant="h6" gutterBottom>
            Collect all your favorite Categories
            </Typography>
             <a href="/auth/google">GOOGLE</a>
            <div className={classes.bigAvatarContainer}>
            <Avatar alt="Landing Avatar" src={image} className={classes.bigAvatar} />
            </div>
          </Grid>    
)

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