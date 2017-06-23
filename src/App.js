import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './component/pages/Home';
import Post from './component/pages/PostDetail';
import Page from './component/pages/PageDetail';
import Gallery from './component/pages/GalleryDetail';
import NoFound from './component/pages/NoFound';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   listPage : 0,
    //   mdtext:"",
    //   tt:1112222,
    //   zznub:0
    // };

  //  console.log('Language: '+navigator.language+'----type---'+typeof(navigator.language));

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
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/post">Posts</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Galleries</NavLink>
              </li>
              <li>
                <NavLink to="/haha">Haha</NavLink>
              </li>
            </ul>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/post" component={Home}/>
              <Route exact path="/post/:title" component={Post}/>
              <Route exact path="/page/:title" component={Page}/>
              <Route exact path="/gallery" component={Home}/>
              <Route exact path="/gallery/:title" component={Gallery}/>
              <Route component={NoFound}></Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
