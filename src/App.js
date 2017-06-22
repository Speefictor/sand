import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './component/pages/Home';
import Post from './component/pages/PostDetail';
import Page from './component/pages/PageDetail';
import {
  BrowserRouter as Router,
  Link,
  Route
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
      <div>
        <Router>
          <div>
            <li>
              <ul>
                <Link to="/">Home</Link>
              </ul>
            </li>
            <Route exact path="/" component={Home}/>
            <Route exact path="/post/:title" component={Post}/>
            <Route exact path="/page/:title" component={Page}/>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
