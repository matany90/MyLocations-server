import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import keys from '../config/keys';
import { onLoctionTextChanged, onAddressTextChanged, onCategorySliderChanged, addLocation, onDragendComplete } from '../actions';

class AddLocation extends Component {
    renderAddPanel = () => {
        const { classes, locationName, addressName, categoriesNames, categoryNameChoosed,
             coordByDrag } = this.props;
        return (
        <Grid container direction="column" className={classes.root}>
        <div className={classes.textContainer}>
        <Typography variant="h5" component="h2" className={classes.textTitle}>
            Add Location
         </Typography>
         <Typography variant="body1" component="h2" className={classes.textContent}>
         Save your favorite location to your location list.
         Drag the map's marker to the correct position
         </Typography>
        </div>
            <TextField
                id="outlined-name"
                label="Location Name"
                className={classes.textField}
                value={locationName}
                onChange={event => this.props.onLoctionTextChanged(event.target.value)}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-name"
                label="Location Address"
                className={classes.textField}
                value={this.props.addressName}
                onChange={event => this.props.onAddressTextChanged(event.target.value)}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="standard-select-currency"
                select
                label="Select"
                className={classes.textField}
                value={categoryNameChoosed}
                onChange={event => this.props.onCategorySliderChanged(event.target.value)}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                helperText="Please select category"
                margin="normal"
                >
                {categoriesNames.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>))}
            </TextField>
            <TextField
                id="outlined-name"
                label="Latitude"
                className={classes.textField}
                value={coordByDrag.lat || 32.085300}
                margin="normal"
                variant="outlined"
                disabled
            />
            <TextField
                id="outlined-name"
                label="Longitude"
                className={classes.textField }
                value={coordByDrag.lng || 34.781769}
                margin="normal"
                variant="outlined"
                disabled
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={!locationName || !addressName || !categoryNameChoosed}
                onClick={() =>
                    this.props.addLocation(locationName, addressName, categoryNameChoosed, coordByDrag,
                        () => this.props.history.push('/locations'))}
            >
                Submit
            </Button>
            </Grid>
        );
    }

    render() {
        const { classes } = this.props; 
        return (
                <Grid container direction="row">
                <Grid item className={classes.mapContainer}>
                    <Map
                        style={{ width: '70%', height: '100%' }}
                        google={this.props.google}
                        zoom={14}
                        initialCenter={{
                            lat: 32.085300,
                            lng: 34.781769
                        }}
                    >
                        <Marker onMouseover={this.onMouseoverMarker}
                            name={'Current location'} 
                            draggable       
                            onDragend={(t, map, coord) => this.props.onDragendComplete(coord)}                                             
                        />
                    </Map>
                </Grid>
                {this.renderAddPanel()}
            </Grid>
        );
    }
}

const styles = theme => ({
    root: {
        width: '30%', 
        height: '100%', 
        paddingBottom: '65px', 
        paddingLeft: '30px' 
    },
    mapContainer: {
        width: '70%',
        height: '100%'
    },
    textContainer: {
        padding: '20px'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    textTitle: {
        marginBottom: '20px'
    },
    textContent: {
        margin: '5px'
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    button: {
        marginTop: '10px',
      },
  });

const mapStateToProps = ({ locations, categories }) => {
    const { locationName, addressName, categoryNameChoosed, coordByDrag } = locations;
    const categoriesNames = Object.keys(categories.categories);

    return { locationName, addressName, categoriesNames, categoryNameChoosed, coordByDrag }
}

const WrappedAddLocation =  GoogleApiWrapper({
    apiKey: keys.GOOGLE_API_KEY
  })(AddLocation);

export default connect(mapStateToProps, 
    {onLoctionTextChanged, onAddressTextChanged, onCategorySliderChanged, addLocation, onDragendComplete })(withStyles(styles)(WrappedAddLocation));