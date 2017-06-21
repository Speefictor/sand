import React, { Component } from 'react';
import logo from './logo.svg';
import Markdown from 'react-markdown';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdtext:"",
      tt:1112222,
      zznub:0
    };

    

  }
  componentDidMount() {
    let t = this;
    fetch("/publicContent/posts/do-it-fast.md").then(function(response){
      return response.text();
    }).then(function(text){
      t.setState({mdtext:text, zznub:998988});
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h4>See markdown below:  </h4>
          <div>
            <Markdown  style={{textAlign:'left'}} className="content" source={this.state.mdtext}></Markdown>
          </div>
          <p>{this.state.tt}</p>
          <p>{this.state.zznub}</p>
        </div>
      </div>
    );
  }
}

export default App;
