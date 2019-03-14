/** @jsx h */

import { h, Component } from 'preact'

import logo from './img/escher-logo.png'
import logo2x from './img/escher-logo@2x.png'
// import screenshot from './img/screen.png'
// import screenshot2x from './img/screen@2x.png'
import sbrg from './img/sbrg-logo.png'
import nnf from './img/nnf-logo.jpg'
import github from './img/github-icon.svg'

import './Home.css'

const TitleBox = () => (
  <div id='homepage-title-box' class='row'>
    <div id='github-link-box'>
      <a href='https://github.com/zakandrewking/escher'>
        <img src={github} alt='GitHub' id='github-link' />
        GitHub
      </a>
      <a href='https://github.com/zakandrewking/escher/releases' id='whats-new'>
        What's new?
      </a>
    </div>
    <img
      id='homepage-logo'
      alt=''
      src={logo}
      srcset={`${logo} 1x, ${logo2x} 2x`}
    />
    <div>
      <div id='homepage-title'>ESCHER</div>
      <div id='homepage-description'>
        Build, share, and embed visualizations of biological pathways.
      </div>
    </div>
  </div>
)

const Filters = () => (
  <div id='filter-box'>
    <div class='row'>
      <div id='organism-filter'>
        <h3>Filter by organism</h3>
        <select id='organisms' class='form-control'>
          <option value='all'>All</option>
        </select>
      </div>
    </div>

    <div class='row'>
      <div id='map-filter'>
        <h3>Map</h3>
        <select id='maps' class='form-control'>
          <option value='none'>None</option>
        </select>
      </div>

      <div>
        <h3>Model (Optional)</h3>
        <select id='models' class='form-control'>
          <option value='none'>None</option>
        </select>
      </div>
    </div>

    <div class='row'>
      <div class='col-sm-6'>
        <h3>Options</h3>
        <div style={{width: '100%'}}>
          <label>
            <input type='checkbox' id='scroll'>
              Scroll to zoom (instead of scroll to pan)
            </input>
          </label>
        </div>
        <div style={{width: '100%'}}>
          <label>
            <input type='checkbox' id='never_ask'>
              Never ask before reloading
            </input>
          </label>
        </div>
      </div>
      <div class='col-sm-6'>
        <button type='button' id='submit' class='btn btn-default column-button'>
          Load map
        </button>
      </div>
    </div>
  </div>
)

const Apps = () => (
  <div id='apps' class='row'>
    <h2>Escher Apps</h2>
    <div>
      <a href='/escher-demo/knockout'>
        <span class='demo-title'>Escher-FBA</span>
        <img
          alt=''
          class='img-responsive demo-img'
          src='/py/escher/static/img/knockout-demo-screenshot.png'
        />
      </a>
    </div>
    <div>
      <a href='/escher-demo/structures'>
        <span class='demo-title'>Structures</span>
        <img
          alt=''
          class='img-responsive demo-img'
          src='/py/escher/static/img/structures-demo-screenshot.png'
        />
      </a>
    </div>
  </div>
)

const EscherConverter = () => (
  <div id='escher-converter' class='row'>
    <h2>EscherConverter</h2>
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
)

const FAQ = () => (
  <div id='faq' class='row'>
    <h2>FAQ</h2>
    <ol>
      <li>
        <h4>What is Escher?</h4>
        <p>
          Escher is a web-based tool for building, viewing, and sharing
          visualizations of biological pathways. These 'pathway maps' are a
          great way to contextualize data about metabolism. To get started,
          load a map by clicking the <b>Load Map</b> button above, or visit
          the <a href='{{ documentation }}'>documentation</a> to learn more.
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
      <li><h4>Are there more maps available? Can I contribute maps?</h4>
        <p>
          We will be uploading maps for all of the organisms in the
          <a href='http://bigg.ucsd.edu/'>BiGG</a> database. If you
          would like to contribute maps, there is a
          <a href='https://escher.readthedocs.org/en/stable/contribute_maps.html'>guide</a>
          available in the documentation.
        </p>
      </li>
      <li>
        <h4>How is Escher licensed?</h4>
        <p>Escher and EscherConverter are distributed under the
          <a href='https://github.com/zakandrewking/escher/blob/master/LICENSE'>
            MIT license
          </a>.
        </p>
      </li>
      <li>
        <h4>What browsers can I use?</h4>
        <p>We recommend using Google Chrome for optimal performance, but
          Escher will also run in the latest versions of Firefox, Internet
          Explorer, and Safari (including mobile Safari).</p>
      </li>
      <li>
        <h4>I have more questions. Who do I ask?</h4>
        <p>
          Visit the <a href='{{ documentation }}'>documentation</a>
          to get started with Escher and explore the API, or ask
          questions in the <a href='https://gitter.im/zakandrewking/escher'>Gitter chat
          room</a>. If you find bugs or would like to contribute to
          the project, feel free to submit an issue and or a pull
          request on <a href='{{ github }}'>Github</a>.
        </p>
      </li>
    </ol>
  </div>
)

const Funding = () => (
  <div id='funding' class='row'>
    <p>
      Funding provided by the Novo Nordisk Foundation through the Center
      for Biosustainability at the Technical University of Denmark
      (NNF10CC1016517).
    </p>
    <div id='logos'>
      <a href='http://systemsbiology.ucsd.edu/'>
        <img id='sbrg-logo' alt='' src={sbrg} />
      </a>
      <a href='http://novonordiskfonden.dk/en'>
        <img id='nnf-logo' alt='' src={nnf} />
      </a>
    </div>
  </div>
)

const Footer = () => (
  <footer>
    <div class='container'>
      <p class='more'>
        <a href='{{ documentation }}'>Documentation</a> – <a href='{{ github }}'>GitHub</a>
      </p>
      <p id='copyright'>
        © 2018 The Regents of the University of California
      </p>
      <p class='version'>
        <a href='{this.github_releases}'>Version {this.version}</a>
      </p>
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
          <EscherConverter />
          <hr />
          <FAQ />
          <Funding />
          <Footer />
        </div>
      </div>
    )
  }
}
