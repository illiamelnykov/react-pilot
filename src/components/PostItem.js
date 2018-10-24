import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './PostItem.css';

const styles = {
  card: {
    maxWidth: 600,    
    marginBottom: 20,
  },
  media: {
    height: 300,
  },
};

const PostItem = (props) => {
  const { classes, item } = props;
  const { title, name, image:{ url } } = item;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Typography gutterBottom variant="h5" component="h2">
          { title ? title : <div className='empty-line'></div> }
        </Typography>
        <CardMedia
          className={classes.media}
          image={ url }
          title={ title }
        />
        <CardContent>          
          <Typography component="div">
          { name ? name : <div className='empty-line'></div> }
          </Typography>
        </CardContent>
      </CardActionArea>      
    </Card>
  );
}

PostItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

export default withStyles(styles)(PostItem);