import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Dashboard from './components/Dashboard'
import Reserve from './components/Reserve'
import Remaining from './components/Remaining'
import Checkout from './components/Checkout'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="Dashboard" component={Dashboard} />
      <Route path="remaining" component={Remaining} />
      <Route path="checkout" component={Checkout} />
    </Route>
  </Router>,
  document.getElementById('root')
)
