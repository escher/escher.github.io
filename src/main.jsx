import { render } from 'preact'
import Router from 'preact-router'
import { createHashHistory } from 'history'
import App from './App'
import Home from './Home'

const Main = () => (
  <Router history={createHashHistory()}>
    <Home path='/' />
    <App path='/app' />
  </Router>
)

render(<Main />, document.getElementById('root'))
