import React, { PropTypes } from 'react'
import { Router } from 'react-router'

export default class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  };

  get content () {
    return (
      <Router history={this.props.history}>
        {this.props.routes}
      </Router>
    )
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        {this.content}
      </div>
    )
  }
}

