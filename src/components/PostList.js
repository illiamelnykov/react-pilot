import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import './PostList.css';

const PostList = ({data}) => (
      <Grid container  spacing={16}>
          <Grid item xs={12}>
              <div className='post-list'>
              <h1>POSTs List</h1>
              {
                data.map(item => <PostItem key={ item.objectId } item={ item }/>) 
              }
              </div>
          </Grid>
      </Grid>            
    );


PostList.propTypes = {
  data: PropTypes.array.isRequired
}

export default PostList;