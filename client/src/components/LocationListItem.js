import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import keys from '../config/keys';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TravelerImg from '../res/img/traveler5.png';

class LocationListItem extends Component {
    renderDescription() {
        const { location } = this.props;
        return (
            <div>
                <Typography gutterBottom variant="h5" component="h2" >
                    {location.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {`Visit ${location.name}, amazing location you choosed!
                    You can see the location of ${location.name} on the map on the left.
                    This location belongs to the category ${location.category}
                    and located at ${location.address}`}
                </Typography>
            </div>
        );
    }

    render() {
        const { location, classes } = this.props;
        return (
            <Grid container direction="row">
                <Grid item className={classes.mapStyle}>
                    <Map
                        google={this.props.google}
                        style={{ height: '100%', width: '70%' }}
                        zoom={14}
                        initialCenter={location.coordByDrag}
                    >
                        <Marker
                            name={'Current location'}
                            position={location.coordByDrag}
                        />
                    </Map>
                </Grid>
                <Grid item className={classes.description}>
                    {this.renderDescription()}
                    <img src={TravelerImg} alt="traveler" className={classes.imgStyle} />
                </Grid>
            </Grid>
        ); 
    }
}

const style = theme => ({
      imgStyle: {
          width: '100%',
      },
      mapStyle: {
        height: '100%',
        width: '70%' 
      }, 
      description: {
        height: '100%', 
        width: '30%' ,
        padding: 60
      }
  })

const mapStateToProps = ({ locations }, ownProps) => {

    return { location: locations.locations[ownProps.match.params.id] }
}

const WrappedLocationListItem =  GoogleApiWrapper({
    apiKey: keys.GOOGLE_API_KEY
  })(LocationListItem);

export default connect(mapStateToProps)(withStyles(style)(WrappedLocationListItem));

