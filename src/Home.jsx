/** @jsx h */

import { h, Component } from 'preact'
import { route } from 'preact-router'
import linkstate from 'linkstate'
import _ from 'underscore'

import logo2x from './img/escher-logo@2x.png'
import sbrg from './img/sbrg-logo.png'
import nnf from './img/nnf-logo.jpg'
import github from './img/github-icon.svg'
import escherFbaScreen from './img/escher-fba.png'
import structures from './img/structures.png'
import tooltip from './img/tooltip.png'
import index from './data/index.json'

import './Home.css'

const TitleBox = () => (
  <div id='homepage-title-box' class='row'>
    <div id='github-link-box'>
      <a href='https://github.com/zakandrewking/escher'>
        <img src={github} alt='GitHub' id='github-link' />
        GitHub
      </a>
      <a href='https://github.com/zakandrewking/escher/releases'>
        What's new?
      </a>
    </div>
    <img
      id='homepage-logo'
      alt=''
      src={logo2x}
    />
    <div>
      <div id='homepage-title'>ESCHER</div>
      <div id='homepage-description'>
        Build, share, and embed visualizations of metabolic pathways
      </div>
    </div>
  </div>
)

class Filters extends Component {
  constructor (props) {
    super(props)

    this.state = {
      maps: [ { name: 'None' }, ...index.maps ],
      models: [ { name: 'None' }, ...index.models ],
      tools: [ 'Builder', 'Viewer' ],
      organisms: [ 'All', ..._.uniq(index.models.map(x => x['organism'])) ],
    }
    this.state.map = 'None'
    this.state.model = 'None'
    this.state.tool = 'Builder'
    this.state.organism = 'All'
  }

  render () {
    const queries = [ 'map', 'model', 'tool' ]
      .map(key => {
        const value = this.state[key]
        const valueName = value.name || value
        console.log(value, valueName, this.state)
        return valueName !== 'None' ? `${key}=${valueName}` : null
      })
      .filter(x => x)
      .join('&')
    const goPath = `/#/app?${queries}`

    return (
      <div id='filter-container' class='column'>
        <div id='organism-filter' class='filter'>
          <h3 class='filter-label'>Filter by organism</h3>
          <select class='filter-select'
            value={this.state.organism}
            onChange={linkstate(this, 'organism')}
          >
            {this.state.organisms
                 .map(name => <option value={name}>{name}</option>)}
          </select>
        </div>

        <div class='row-collapse'>
          <div id='map-filter' class='filter'>
            <h3 class='filter-label'>Map</h3>
            <select class='filter-select'
              value={this.state.map}
              onChange={linkstate(this, 'map')}
            >
              {this.state.maps.map(map => map.name)
                   .map(name => <option value={name}>{name}</option>)}
            </select>
          </div>

          <div id='model-filter' class='filter'>
            <h3 class='filter-label'>Model (Optional)</h3>
            <select class='filter-select'
              value={this.state.model}
              onChange={linkstate(this, 'model')}
            >
              {this.state.models.map(model => model.name)
                   .map(name => <option value={name}>{name}</option>)}
            </select>
          </div>

          <div id='tool-filter' class='filter'>
            <h3 class='filter-label'>Tool</h3>
            <select class='filter-select'
              value={this.state.tool}
              onChange={linkstate(this, 'tool')}
            >
              {this.state.tools.map(tool =>
                <option value={tool}>{tool}</option>
              )}
            </select>
          </div>
        </div>

        <div class='row-collapse'>
          <div id='options-filter' class='filter'>
            <h3 class='filter-label'>Options</h3>
            <label class='filter-checkbox'>
              <input type='checkbox' id='scroll' />
              Scroll to zoom (instead of scroll to pan)
            </label>
            <label class='filter-checkbox'>
              <input type='checkbox' id='never_ask' />
              Never ask before reloading
            </label>
          </div>

          <div class='filter' id='go-button-container'>
            <a href={goPath} id='go-button'>Load map</a>
          </div>
        </div>
      </div>
    )
  }
}

const Apps = () => (
  <div id='apps' class='row-collapse section'>
    <h2 class='section-title'>Escher Apps</h2>
    <a class='demo-box'
      href='https://sbrg.github.io/escher-fba'
      style={{'backgroundImage': `url(${escherFbaScreen})`}}
    >
      <div class='demo-title'>
        <h3>Escher-FBA</h3>
        Interactive, web-based flux balance analysis
      </div>
    </a>
  </div>
)

const Demos = () => (
  <div id='demos' class='row-collapse section'>
    <div class='column section-title demo-section-title'>
      <h2>Demos</h2>
      <span>Technical demos for developers</span>
    </div>
    <a class='demo-box'
      href='https://escher.github.io//escher-demo/structures'
      style={{'backgroundImage': `url(${structures}`}}
    >
      <div class='demo-title'>
        <h3>Structures</h3>
        Embed chemical structures
      </div>
    </a>
    <a class='demo-box'
      href='https://escher.github.io/escher-demo/structures'
      style={{'backgroundImage': `url(${tooltip})`}}
    >
      <div class='demo-title'>
        <h3>Tooltip</h3>
        Customize tooltips
      </div>
    </a>
  </div>
)

const EscherConverter = () => (
  <div id='escher-converter' class='row-collapse section'>
    <h2 class='section-title'>EscherConverter</h2>
    <div class='column'>
      <p>
        EscherConverter is a standalone program that reads files created with
        Escher and converts them to files in community standard formats.
      </p>
      <p>
        <a href='https://escher.readthedocs.org/en/stable/escherconverter.html'>
          Learn more and download.
        </a>
      </p>
    </div>
  </div>
)

const FAQ = () => (
  <div class='row-collapse section'>
    <h2>FAQ</h2>
    <ol id='faq-list'>
      <li>
        <h4>What is Escher?</h4>
        <p>
          Escher is a web-based tool for building, viewing, and sharing
          visualizations of biological pathways. These pathway maps are a
          great way to contextualize data about metabolism. To get started,
          load a map by clicking the <b>Load Map</b> button above, or visit
          the <a href='https://escher.readthedocs.io'>documentation</a> to
          learn more.
        </p>
      </li>
      <li>
        <h4>How do I cite Escher?</h4>
        <p>
          You can help support Escher by citing our publication when you
          use Escher or EscherConverter:
        </p>
        <p>
          Zachary A. King, Andreas Dräger, Ali Ebrahim, Nikolaus
          Sonnenschein, Nathan E. Lewis, and Bernhard O. Palsson
          (2015) <i>Escher: A web application for building, sharing, and
          embedding data-rich visualizations of biological pathways</i>,
  PLOS Computational Biology 11(8): e1004321.
          doi:<a href='http://dx.doi.org/10.1371/journal.pcbi.1004321'>
            10.1371/journal.pcbi.1004321</a>
        </p>
      </li>
      <li>
        <h4>How is Escher licensed?</h4>
        <p>
          Escher and EscherConverter are distributed under the <a href='https://github.com/zakandrewking/escher/blob/master/LICENSE'>MIT license</a>.
        </p>
      </li>
      <li>
        <h4>What browsers can I use?</h4>
        <p>We recommend using Google Chrome for optimal performance, but
          Escher will also run in the latest versions of Firefox, MS Edge,
          and Safari (including mobile Chrome & Safari).</p>
      </li>
      <li>
        <h4>I have more questions. Who do I ask?</h4>
        <p>
          Visit the <a href='https://escher.readthedocs.io'>documentation</a> to
          get started with Escher and explore the API, or ask
          questions in
          the <a href='https://gitter.im/zakandrewking/escher'>Gitter chat room</a>. If
          you find bugs or would like to contribute to
          the project, feel free to submit an issue and or a pull
          request on <a href='https://github.com/zakandrewking/escher'>Github</a>.
        </p>
      </li>
    </ol>
  </div>
)

const Funding = () => (
  <div id='funding' class='column section'>
    <p>
      Funding provided by the Novo Nordisk Foundation through the Center
      for Biosustainability at the Technical University of Denmark
      (NNF10CC1016517).
    </p>
    <div id='logos' class='row'>
      <a href='http://novonordiskfonden.dk/en'>
        <img id='nnf-logo' alt='' src={nnf} />
      </a>
      <a href='http://systemsbiology.ucsd.edu/'>
        <img id='sbrg-logo' alt='' src={sbrg} />
      </a>
    </div>
  </div>
)

const Footer = () => (
  <footer>
    <div class='footer-container column'>
      <div class='row'>
        <span class='more'>
          <a href='https://escher.readthedocs.io'>Documentation</a> – <a href='https://github.com/zakandrewking/escher'>GitHub</a>
        </span>
        <div class='fill' />
        <span class='version'>
          <a href='https://github.com/zakandrewking/escher/releases'>Version {process.env.REACT_APP_VERSION}</a>
        </span>
      </div>
      <span>
        © 2019 The Regents of the University of California
      </span>
    </div>
  </footer>
)

export default class Home extends Component {
  componentWillMount () {
    // The Escher fill-screen option breaks the homepage
    if (document.body.classList.contains('fill-screen')) {
      document.body.classList.remove('fill-screen')
    }
  }

  render () {
    return (
      <div id='homepage-container'>
        <div id='homepage-body'>
          <TitleBox />
          <Filters />
          <hr />
          <Apps />
          <hr />
          <Demos />
          <hr />
          <EscherConverter />
          <hr />
          <FAQ />
          <hr />
          <Funding />
        </div>
        <Footer />
      </div>
    )
  }
}
