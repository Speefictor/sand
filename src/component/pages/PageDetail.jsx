import React, { Component } from 'react';
import MDV from '../MarkdownViewer';
import Loading from '../Loading';


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
      return response.text();
    }).then(function(text){
      T.setState({content:text});
    });
  }
  render() {
    if(this.state.content){
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
