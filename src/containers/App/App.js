import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

import {simpleAction} from '../../actions/simpleActions';
import singe from '../../singe.png'

const mapStateToProps = state =>({
  ...state
})

const mapDispatchToProps = dispatch =>({
  simpleAction:()=>dispatch(simpleAction())
})

class App extends Component {

  simpleAction = (event)=>{
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={singe} height="250" alt=""></img>
          <h1>
            Bienvenue sur le starter kit d'UQAC zoo
          </h1>
          <p>
            Ce template a pour but de servir de base pour tous nos projets web
          </p>
          <h2>
            Animaux du zoo, à vos claviers !
          </h2>
        </header>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
