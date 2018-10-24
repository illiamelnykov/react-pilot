import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Message = (props) => {
  const { open, classes, message, variant } = props;
  return (
    <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={open}
        >
       <SnackbarContent
        className={classes[variant]}
        aria-describedby="client-snackbar"
        message={
            <Typography component="div" className={classes.message}>            
              {message}
            </Typography>       
        }
      />
      </Snackbar>
  );
}
Message.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};
const styles = theme => ({ 
  error: {
    backgroundColor: theme.palette.error.dark,
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },   
  message: {
    color: '#fff'
  },
});
export default withStyles(styles)(Message);