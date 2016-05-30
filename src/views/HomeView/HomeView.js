import React from 'react'
import { Link } from 'react-router'


export class HomeView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <Link to="/about">About Page</Link>
      </div>
    )
  }
}

export default HomeView

