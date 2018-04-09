/** @jsx h */

import { h, Component } from 'preact'
import { Builder } from 'escher'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      builder: null
    }
  }

  //  Enables Escher handling DOM
  shouldComponentUpdate () {
    return false
  }

  componentDidMount () {
    const builder = new Builder(null, null, null, this.base, {
      fill_screen: true
    })
    this.setState({ builder })
  }

  render () {
    return (
      <div />
    )
  }
}
