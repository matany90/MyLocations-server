import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchCategories, fetchLocations } from '../actions';
import { connect } from 'react-redux';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import CategoriesList from '../components/CategoriesList';
import LocationsList from '../components/LocationsList';
import AddLocation from '../components/AddLocation';
import LocationListItem from '../components/LocationListItem';
import LandingPage from '../components/LandingPage';

class App extends Component {
    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchLocations();
    }

    render() {
        const { classes } = this.props;
        return (
                <BrowserRouter>
                <div className={classes.toolbar} />
                        <Header />
                        <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/categories" component={CategoriesList} />
                        <Route exact path="/locations" component={LocationsList} />
                        <Route exact path="/locations/addLocation" component={AddLocation} />
                        <Route exact path="/locations/:id" component={LocationListItem} />
                        </Switch>
                        <BottomNav />
                </BrowserRouter>
        );
    }
}

const style = theme => ({
    toolbar: theme.mixins.toolbar,
});

export default connect(null, {fetchCategories, fetchLocations})(withStyles(style)(App));