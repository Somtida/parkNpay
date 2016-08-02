import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Dashboard from './components/Dashboard'
import Reserve from './components/Reserve'
import Remaining from './components/Remaining'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="reserve" component={Reserve} />
      <Route path="remaining" component={Remaining} />
    </Route>
  </Router>,
  document.getElementById('root')
)
