import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostList from './PostList';
import { actions } from './FeedActions';
import Message from './Message';
import './Feed.css';

class Feed extends Component {  
  scroll = false;  
  componentDidMount(){
    this.props.actions.fetchInit();    
    document.addEventListener("scroll", this.onScroll);
  } 

  onScroll = () =>{    
    const elem = ReactDOM.findDOMNode(this);
    if (this.isBottom(elem) && !this.props.error.status && !this.props.isProgress) {
      this.scroll = true;
      this.props.actions.fetchMore();     
    }
  }  
  componentWillUnmount(){
    document.removeEventListener('scroll', this.onScroll);
  }
  componentDidUpdate(prevProps, prevState) {
    this.scroll = false;
    if (prevProps.error.status ){
      window.scrollTo(0, window.pageYOffset - 20);    
    }
  }
  
  render() {    
    const { error, data, isProgress } = this.props;
    return (
      <React.Fragment>
        <PostList data = { data }/>
        {isProgress &&
          <CircularProgress className='progress' color="secondary"/>
        }
        { error.status &&
          <Message
              open={!!error.status}
              variant="error"
              message={`Response Error!. Status ${error.status}. ${error.message}!`}
            />
        }
      </React.Fragment>
    );
  }
  isBottom = (el) =>  el.getBoundingClientRect().bottom <= window.innerHeight;
}

Feed.propTypes = {
  data: PropTypes.array,
  actions: PropTypes.object,
  error: PropTypes.object
}

const mapStateToProps = (state)=>({  
  data: state.feed.data,
  error: state.feed.error,
  isProgress: state.feed.isProgress
})
const mapDispatchToProps = ((dispatch) => ({  
    actions: {...bindActionCreators({ ...actions }, dispatch)}      
}));

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
