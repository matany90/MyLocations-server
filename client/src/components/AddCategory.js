import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { onCategoryTextChanged, addCategory, DialogEvent } from '../actions';

class AddCategory extends Component {
    render() {
        const { classes, categoryName } = this.props;
        return (
            <Grid container direction="column" justify="center" alignContent="center">
            <DialogContent>
                    <TextField
                        id="name"
                        autoFocus
                        margin="dense"
                        label="Category Name"
                        type="email"
                        className={classes.textField}
                        value={categoryName}
                        onChange={event => this.props.onCategoryTextChanged(event.target.value)}
                    />
                    </DialogContent>
                    <DialogActions className={classes.buttonContainer}>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    disabled={!categoryName}
                    onClick={() => {
                        this.props.addCategory(categoryName)
                        this.props.DialogEvent(false)
                    }}
                    >
                        Submit
                    </Button>
                    </DialogActions>
            </Grid>
    );
    }
}

const styles = theme => ({
    textField: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    title: {
        padding:'20px'
    },
    button: {
        width: '10vh'
    },
    buttonContainer: {
        padding: '15px',
    },
  });

  const mapStateToProps = ({categories}) => {

      return {categoryName: categories.categoryToAdd};
  }

export default connect(mapStateToProps, {onCategoryTextChanged, addCategory, DialogEvent})(withStyles(styles)(AddCategory));