import React from 'react';
import PropTypes from 'prop-types';
import Item  from './ListItem';
import Loading from './Loading';


class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageNumber : 1,
      url        : "",
      data       : undefined
    };
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.data){
      this.setState({
        data : nextProps.data
      })
    }

  }
  _load(){
    this.props.loadData(this.state.pageNumber, (data)=>{
      this.setState({data:data});
    });
  }
  _loadMore(){
    this.state({
      pageNumber : this.state.pageNumber+1
    })
    this._load();
  }
  componentDidMount() {
    this._load();
  }
  render() {
    if(!this.state.data){
      return(
        <Loading/>
      )
    }
    if(this.state.data.list.length === 0){
      return(
        <div>There's nothing here.</div>
      )
    }
    return(
      <div className="list">
        {
          this.state.data.list.map((item, index)=>{
            if(this.props.filter(item)){
              return(
                <Item {...item} key={index}></Item>
              );
            }
          })
        }
      </div>
    )
  }
}
/*List.PropTypes = {
  loadData   : PropTypes.func,
  data       : PropTypes.array
}*/
export default List;
