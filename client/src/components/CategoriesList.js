import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteCategory, onRemoveCategoryClick, DialogEvent } from '../actions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import DeleteIcon from '@material-ui/icons/Delete';
import TravelersImg from '../res/img/traveler4.png'
import Dialog from '@material-ui/core/Dialog';

import AddCategory from '../components/AddCategory';

class CategoriesList extends Component {
    renderDialog = () => {
        const { isOpenDialog, classes } = this.props;
        return (
            <Dialog open={isOpenDialog}
                classes={{ paper: classes.dialogPaper }}
                onClose={() => this.props.DialogEvent(false)} aria-labelledby="form-dialog-title">
                <AddCategory />
            </Dialog>
        );
    }

    renderCategories = () => {
        const { categories, classes } = this.props;
        if (_.isEmpty(this.props.categories)) {
            return (
                <Typography variant="body1" color="textSecondary" component="p">
                    List of categories is empty <br />
                    To add a new category, please click the button above
               </Typography>
            );
        }
        return _.map(categories, category => (
            <div key={category.Name}>
                <List>
                    <Paper className={classes.itemStyle}>
                        {this.renderListItem(category)}
                    </Paper>
                </List>
            </div>
        ))
    }

    renderListItem = (category) => (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <ListIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={category.Name}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete"
                    onClick={() => {
                        this.props.deleteCategory(category.Name)
                        this.props.onRemoveCategoryClick();
                    }}
                >
                    {this.props.isRemoveCategoryClicked ? <DeleteIcon /> : null}
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )

    render() {
        const { classes } = this.props;
        if (this.props.isOpenDialog) {
            return this.renderDialog()
        }
        return (
            <Container fixed>
                <Grid container direction="row" className={classes.containerStyle}>
                    <Grid item className={classes.categoriesContainerStyle}>
                        <div className={classes.demo}>
                            {this.renderCategories()}
                        </div>
                    </Grid>
                    <Grid item className={classes.description}>
                        <Typography variant="h5" gutterBottom>
                            Categories
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            All your favorite Categories! <br />
                            As you add location to your location list, you'll need to <br />
                            select one of the categories from your list on the left. <br />
                            You can Add/Remove Categories by clicking the buttons above
                        </Typography>
                        <img src={TravelersImg} alt="traveler" className={classes.imgStyle} />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const styles = theme => ({
      dialogPaper: {
    },
    itemStyle: {
        maxHeight: 200, 
        overflow: 'auto'
    },
    containerStyle: {
        marginTop: '30px'
    }, 
    categoriesContainerStyle: {
        width: '50%', 
        height: '100%' 
    }, 
    description: {
        width: '50%', 
        height: '100%', 
        paddingLeft:'100px'
    }, 
    imgStyle: {
        paddingTop: '40px',
        paddingRight:'100px',
        paddingBottom: '10vh'
    }
  });

const mapStateToProps = (state) => {
    const {categories, isRemoveCategoryClicked, isOpenDialog} = state.categories;

    return { categories, isRemoveCategoryClicked, isOpenDialog }
}


export default connect(mapStateToProps, { deleteCategory, onRemoveCategoryClick, DialogEvent })(withStyles(styles)(CategoriesList));
