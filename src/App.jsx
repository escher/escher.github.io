/** @jsx h */
/* global process, fetch */

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

  mapUrl () {
    return `https://escher.github.io/1-0-0/5/maps/${this.props.organism}/${this.props.map}.json'`
  }

  modelUrl () {
    return 'https://escher.github.io/1-0-0/5/models/${this.props.organism}/${this.props.model}.json'
  }

  componentDidMount () {
    Promise.all([
      this.props.map ? fetch(this.mapUrl()).then(r => r.json()) : Promise.resolve(null),
      this.props.model ? fetch(this.modelUrl()).then(r => r.json()) : Promise.resolve(null)
    ]).then(([mapData, modelData]) => this.load(mapData, modelData))
  }

  load (map, model) {
    console.log(map, model)
    const builder = new Builder(map, model, null, this.base, {
      fill_screen: true,
      never_ask_before_quit: this.props.tool === 'Viewer' ||
                             this.props.neverAskBeforeQuit,
      // || process.env.NODE_ENV === 'development',
      enable_editing: this.props.tool !== 'Viewer',
      scroll_behavior: this.props.scrollToZoom ? 'zoom' : 'pan'
    })
    this.setState({ builder })
  }

  render () {
    return (
      <div />
    )
  }
}
