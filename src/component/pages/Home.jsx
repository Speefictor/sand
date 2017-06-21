import React, { Component } from 'react';

import List from '../List';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPage : 0
    };


    this._loadList = this._loadList.bind(this);
  }
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
    return (
      <div className="page">
          <h4>See List :</h4>
          <List loadData={this._loadList}></List>
      </div>
    );
  }
}

export default Home;
