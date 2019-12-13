import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { fetchCategories, fetchLocations, fetchUser } from '../actions';
import { connect } from 'react-redux';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import CategoriesList from '../components/CategoriesList';
import LocationsList from '../components/LocationsList';
import AddLocation from '../components/AddLocation';
import LocationListItem from '../components/LocationListItem';
import LandingPage from '../components/LandingPage';
import LoadingPage from '../components/LoadingPage';

class App extends Component {
    componentDidMount() {
        const { fetchCategories, fetchLocations } = this.props;
        this.props.fetchUser(fetchCategories, fetchLocations);
    }

    render() {
        const { classes, auth } = this.props;
        return (
                <BrowserRouter>
                <div className={classes.toolbar} />
                        <Header />
                        <Switch>
                        <Route exact path="/">
                        {auth === false ?  <LandingPage /> : auth === null ? <LoadingPage /> : <Redirect to="/categories" />}
                        </Route>
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

const mapStateToProps = ({ auth }) => {
    return { auth };
}

export default connect(mapStateToProps, {fetchCategories, fetchLocations, fetchUser})(withStyles(style)(App));