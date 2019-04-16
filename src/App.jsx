/** @jsx h */
/* global process, fetch */

import { h, Component } from 'preact'
import { route, getCurrentUrl } from 'preact-router'
import _ from 'underscore'
import { Builder } from 'escher'

import { niceMapName } from './util'
import './App.css'
import index from './data/index.json'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      builder: null
    }
    this.handleQuickJumpChange = this.handleQuickJumpChange.bind(this)
  }

  //  Enables Escher handling DOM
  shouldComponentUpdate (nextProps) {
    if (this.props.url !== nextProps.url) {
      this.loadMap(nextProps.map)
    }
    return false
  }

  mapUrl (map) {
    const organism = _.find(index.maps, x => x.name === map).organism
    return `https://escher.github.io/${index.schema_version}/${index.map_model_version}/maps/${organism}/${map}.json`
  }

  modelUrl (model) {
    const organism = _.find(index.models, x => x.name === model).organism
    return `https://escher.github.io/${index.schema_version}/${index.map_model_version}/models/${organism}/${model}.json`
  }

  componentDidMount () {
    Promise.all([
      this.props.map ? fetch(this.mapUrl(this.props.map)).then(r => r.json()) : Promise.resolve(null),
      this.props.model ? fetch(this.modelUrl(this.props.model)).then(r => r.json()) : Promise.resolve(null)
    ]).then(([mapData, modelData]) => this.loadBuilder(mapData, modelData))
  }

  loadBuilder (map, model) {
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

  loadMap (nextMap) {
    fetch(this.mapUrl(nextMap)).then(r => r.json()).then(mapData => {
      this.state.builder.load_map(mapData)
    })
  }

  handleQuickJumpChange (e) {
    const map = e.target.value.replace(/ /g, '%20')
    const currentUrl = getCurrentUrl()
    const newUrl = currentUrl.replace(/map=[^&]*/, `map=${map}`)
    route(newUrl)
  }

  render () {
    const options = index.maps
                         .map(x => x.name)
                         .filter(x => x.split('.')[0] === this.props.map.split('.')[0])
    return (
      <div>
        {options.length > 1 &&
        <select value={this.props.map}
          onChange={this.handleQuickJumpChange}
          id='quick-jump-menu'
        >
          {options.map(option => (
            <option value={option}>{niceMapName(option)}</option>
          ))}
        </select>
        }
      </div>
    )
  }
}
