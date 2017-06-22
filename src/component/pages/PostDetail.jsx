import React, { Component } from 'react';
import Loading from '../Loading';
import MDV from '../MarkdownViewer';


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
      return response.text();
    }).then(function(text){

      T.setState({content:text});
  //    T.setState(Object.assign({content:md},{...json}));
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
    )
  }
}

export default PostDetail;
