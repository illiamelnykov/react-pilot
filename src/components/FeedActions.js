import data from '../data/posts.json';
import delay from '../utils';
const NULL = 0;
const TWOO = 2;
const THIRD = 3;
const TIMEOUT = 2000;
export const actions = {
  
  FETCH_INIT: 'FETCH_INIT',
  FETCH_MORE: 'FETCH_MORE',
  ERROR: 'ERROR',
  ERROR_CLEAR: 'ERROR_CLEAR',
  SET_PROGRESS: 'SET_PROGRESS',

  fetchInit: () => dispatch =>{
    dispatch({ type: actions.SET_PROGRESS });
    delay(TIMEOUT).then(() => {
        dispatch({
            type: actions.FETCH_INIT,
            payload: data.slice(NULL, THIRD)
        });
    })
  },
  
  fetchMore: item => (dispatch, getState) =>{      
      const { feed } = getState();
      const item = feed.data.length;
      if (data.length === feed.data.length) return;
      if ( feed.counterReq && feed.counterReq % TWOO === NULL ) {
        dispatch({
          type: actions.ERROR,
          payload: {
            status: 400,
            message: "Error occurred. Try again"
          }
        });
        delay(TIMEOUT).then(() => {
          dispatch({ type: actions.ERROR_CLEAR }) 
        })
        return;
      }
      dispatch({ type: actions.SET_PROGRESS });
      delay(TIMEOUT).then(() => {         
          dispatch({
              type: actions.FETCH_MORE,
              payload: data.slice(item, item + TWOO)
          });
      });
  },  
}