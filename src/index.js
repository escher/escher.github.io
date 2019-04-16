/** @jsx h */

import { h, render } from 'preact'
import Router from 'preact-router'
import createHashHistory from 'history/createHashHistory'
import App from './App'
import Home from './Home'

const Main = () => (
  <Router history={createHashHistory()}>
    <Home path='/' />
    <App path='/app' />
  </Router>
)

render(<Main />, document.getElementById('root'))
