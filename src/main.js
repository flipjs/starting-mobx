import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import makeRoutes from './routes'
import Root from './Root'

const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: __BASENAME__
})

const routes = makeRoutes()

// Now that redux and react-router have been configured, we can render the
// React application to the DOM!
ReactDOM.render(
  <Root history={browserHistory} routes={routes} />,
  document.getElementById('root')
)

