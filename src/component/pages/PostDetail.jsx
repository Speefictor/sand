import React, { Component } from 'react';
import Loading from '../Loading';
import MDV from '../MarkdownViewer';
import NoFound from './NoFound';


class PostDetail extends Component {
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
      if(/markdown/.test(response.headers.get('Content-Type')))
        return response.text();
      return '<-error->';
    }).then(function(text){
      if(text === '<-error->'){
        T.setState({error:'noFound'});
        return;
      }
      T.setState({content:text});
  //    T.setState(Object.assign({content:md},{...json}));
    });
  }
  render() {
    if(this.state.error){
      return(
        <NoFound location={this.props.location}/>
      );
    }else if(this.state.content){
      return (
        <MDV content={this.state.content}></MDV>
      );
    }

    return (
      <Loading/>
    )
  }
}

export default PostDetail;
