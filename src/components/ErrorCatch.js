import React, { Component } from 'react'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

class ErrorCatch extends Component {
  constructor (props) {
    super(props)
    this.state = { error: null }
  }
  componentDidCatch (error, errorInfo) {
    this.setState({ error })
  }
  render () {
    if (this.state.error) {
      return (
        <div
          className='error-catch'>
          <AccessAlarmIcon />
          <p>We're sorry — something's gone wrong.</p>
          <p>Our team has been notified, but click here fill out a report.</p>
        </div>
      )
    }
    return this.props.children;    
  }
}

export default ErrorCatch