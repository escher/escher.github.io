/** @jsx h */

import { h, Component } from 'preact'

import logo from './img/escher-logo.png'
import logo2x from './img/escher-logo@2x.png'
import screenshot from './img/screen.png'
import screenshot2x from './img/screen@2x.png'
import sbrg from './img/sbrg-logo.png'
import nnf from './img/nnf-logo.jpg'

import './Home.css'

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

          <div id='homepage-title-box'>
            <img
              id='homepage-logo'
              alt=''
              src={logo}
              srcset={`${logo} 1x, ${logo2x} 2x`}
            />
            <div id='homepage-title'>ESCHER</div>
          </div>

          <div id='homepage-description'>
            Build, share, and embed visualizations of biological pathways.
          </div>

          <div id='homepage-launch-box'>
            <a href='/app' id='homepage-launch-box-centered'>
              <img
                id='homepage-launch-screen'
                alt=''
                src={screenshot}
                srcset={`${screenshot} 1x, ${screenshot2x} 2x`}
              />
              <div id='homepage-launch-button'>
                Launch Escher-FBA
              </div>
            </a>
          </div>

          <hr />

          <hr />

          <p id='funding'>
            Funding provided by the Novo Nordisk Foundation through the Center
            for Biosustainability at the Technical University of Denmark
            (NNF10CC1016517).
          </p>
          <div id='logos'>
            <a href='http://systemsbiology.ucsd.edu/'><img id='sbrg-logo' alt='' src={sbrg} /></a>
            <a href='http://novonordiskfonden.dk/en'><img id='nnf-logo' alt='' src={nnf} /></a>
          </div>

          <p id='copyright'>
            © 2018 The Regents of the University of California
          </p>
        </div>
      </div>
    )
  }
}
