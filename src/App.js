import React, { Component } from 'react';
import logo from './logo.svg';
import Markdown from 'react-markdown';
import './App.css';
import Home from './component/pages/Home';
import Detail from './component/pages/ArticleDetail';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPage : 0,
      mdtext:"",
      tt:1112222,
      zznub:0
    };



  }
  // componentDidMount() {
  //   let t = this;
  //   fetch("/publicContent/posts/do-it-fast.md").then(function(response){
  //     return response.text();
  //   }).then(function(text){
  //     t.setState({mdtext:text, zznub:998988});
  //   });
  // }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
            <Route exact path="/post/:title" component={Detail}/>
        </div>
      </Router>
    );
  }
}

export default App;
