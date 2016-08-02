import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Dashboard from './components/Dashboard'
import Reserve from './components/Reserve'
import Properties from './components/Properties'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="reserve" component={Reserve} />
      <Route path="properties" component={Properties} />
    </Route>
  </Router>,
  document.getElementById('root')
)
