import React, { Component } from 'react';
import Markdown from 'react-markdown';

import {
  Link
} from 'react-router-dom'

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title   : '',
      content : ''
    };



  }
  componentDidMount() {
    let {title} = this.props.match.params;
    const T = this;
    fetch("/publicContent/post/"+title+".md").then(function(response){
      return response.text();
    }).then(function(text){
      T.setState({content:text});
    });
  }
  render() {
    return (
      <article>
        <Markdown source={this.state.content}/>
      </article>
    );
  }
}

export default ArticleDetail;
