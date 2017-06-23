import React, { Component } from 'react';
import MDV from '../MarkdownViewer';
import Loading from '../Loading';
import NoFound from './NoFound';


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
    fetch("/publicContent/page/"+title+".md").then(function(response){
      if(/markdown/.test(response.headers.get('Content-Type')))
        return response.text();
      return '<-error->';
    }).then(function(text){
      if(text === '<-error->'){
        T.setState({error:'noFound'});
        return;
      }
      T.setState({content:text});
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
    );
  }
}

export default ArticleDetail;
