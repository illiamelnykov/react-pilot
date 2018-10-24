import { actions } from './FeedActions'

export const FeedState = () => ({
  data: [],  
  counterReq: 0,
  error: {},
  isProgress: false
})

export function FeedReducer (state = new FeedState(), {payload, type}) {
  switch (type) {
    case actions.FETCH_INIT:
      return {
        ...state,
        data: payload,
        counterReq: state.counterReq + 1,
        isProgress: false
      }
    case actions.FETCH_MORE:
      return {
        ...state,
        data: [...state.data, ...payload],
        counterReq: state.counterReq + 1,
        error: {},
        isProgress: false
      }   
    case actions.ERROR:
      return {
        ...state,
        error: payload,
        counterReq: 0
      }
    case actions.ERROR_CLEAR:
      return {
        ...state,
        error: {}
      }
    case actions.SET_PROGRESS:
    return {
      ...state,
      isProgress: true
    }
    default:
      return {
        ...state
      }
  }
}