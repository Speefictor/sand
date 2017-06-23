import React from 'react';
//import PropTypes from 'prop-types';
import Loading from '../Loading';
import TimeAgo from 'timeago-react';

class GalleryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title   : ''
    };



  }
  componentDidMount() {
    let {title} = this.props.match.params;
    const T = this;
    fetch("/publicContent/json/gallery/"+title+".json").then(function(response){
      return response.json();
    }).then(function(json){
      T.setState({...json});
    });
  }
  render() {
    if(this.state.title){

      const {title, pictures, time, tag} = this.state;
      return(
        <div>
          <header>
            <h1>{title}</h1>
            <TimeAgo datetime={time} local="zh_CN"/>
          </header>
          <ul className="picList">
            {
              pictures.map((item, index)=>(
                <li key={index}>
                  <img src={"/publicContent"+item.path} alt=""/>
                </li>
              ))
            }

          </ul>
        </div>
      )
    }
    return (
      <Loading/>
    );
  }
}
export default GalleryDetail;
