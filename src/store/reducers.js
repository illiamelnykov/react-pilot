import { combineReducers } from 'redux';
import { FeedReducer } from '../components/FeedReducer';

export default combineReducers({    
    feed: FeedReducer
});