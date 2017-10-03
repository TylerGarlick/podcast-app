import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { NotFound, Podcasts } from '../containers'


export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Podcasts} />
      <Redirect to="/" from="/podcasts"   />
      <Route component={NotFound} />
    </Switch>
  </Router>
)