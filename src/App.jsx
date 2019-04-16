/** @jsx h */
/* global process, fetch */

import { h, Component } from 'preact'
import _ from 'underscore'
import { Builder } from 'escher'

import index from './data/index.json'

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
    const organism = _.find(index.maps, x => x.name === this.props.map).organism
    return `https://escher.github.io/${index.schema_version}/${index.map_model_version}/maps/${organism}/${this.props.map}.json`
  }

  modelUrl () {
    const organism = _.find(index.models, x => x.name === this.props.model).organism
    return `https://escher.github.io/${index.schema_version}/${index.map_model_version}/models/${organism}/${this.props.model}.json`
  }

  componentDidMount () {
    Promise.all([
      this.props.map ? fetch(this.mapUrl()).then(r => r.json()) : Promise.resolve(null),
      this.props.model ? fetch(this.modelUrl()).then(r => r.json()) : Promise.resolve(null)
    ]).then(([mapData, modelData]) => this.load(mapData, modelData))
  }

  load (map, model) {
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
