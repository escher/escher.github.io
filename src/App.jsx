/** @jsx h */
/* global process */

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
      fill_screen: true,
      never_ask_before_quit: process.env.NODE_ENV === 'development' ||
                             this.props.tool === 'Viewer',
      enable_editing: this.props.tool !== 'Viewer'
    })
    this.setState({ builder })
  }

  render () {
    return (
      <div />
    )
  }
}
