import React, { Component } from 'react';

import List from '../List';
import HScroll from '../HorizontalScroll';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPage : 0,
      filter   : "all"
    };

    this._loadList = this._loadList.bind(this);
  }
  // componentWillReceiveProps(nextProps) {
  //
  //   this.setState({
  //     filter:nextProps.match.path.substr(1) || 'all'
  //   });
  // }
  _loadList(page, callBack){
    const APP = this;

    let url = "/publicContent/json/home/last.json";
    if(page > 1){
      page = this.state.listPage - page;
      url = ["/publicContent/json/home/page-",page,".json"].join("");
    }

    fetch(url).then(function(response){
      return response.json();
    }).then(function(json){
      APP.setState({
        listPage : json.pageNumber
      });
      callBack(json);
    });
  }

  render() {
    const filter = this.props.match.path.substr(1) || 'all';
      console.log("----dataType:"+filter);
    return (
      <div className="page">
        <h4>See List :</h4>
        <List loadData={this._loadList} filter={(item)=>(filter==='all' || item.type === filter)}></List>
        <HScroll style={{width:'350px',paddingLeft:'10px',paddingRight:'10px'}}>
          <div style={astyle}></div>
          <div style={astyle}></div>
          <div style={astyle}></div>
          <div style={astyle}></div>
          <div style={astyle}></div>
          <div style={astyle}></div>
          <div style={astyle}></div>
          <div style={astyle}></div>
          <div style={astyle}></div>
          <div style={astyle}></div>
        </HScroll>
      </div>
    );
  }
}
const astyle={
  width:'15em',
  height:'150px',
  backgroundColor:'green',
  marginRight:'10px',
  border:'1px solid #333'
}
export default Home;
