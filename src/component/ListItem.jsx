import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'timeago-react';
import {
  Link
} from 'react-router-dom';

class ListItem extends React.Component {

  _renderHeadPic(){
    const pic = this.props.headPic;
    if(pic) return(<img src={pic} alt="" className="headPic"/>);

  }
  _renderSummary(){
    const s = this.props.summary;
    if(s) return(<summary>{s}</summary>);

  }

  _getLink(){
    const { title, type } = this.props;
    const p = title.toLowerCase().replace(/ /g,'-');
    var str = `-------${title}-----${type}`;
    console.log(str);
    return ["/",type,"/",p].join("");
  }

  render() {
    // eslint-disable-next-line
    const { id, title, author, time, type, category, tag, path, className } = this.props;

    return(
        <div className={className}>
          {this._renderHeadPic()}
          <Link to={this._getLink()} className="title">{title}</Link>
          {this._renderSummary()}
          <div className="info">
            <TimeAgo datetime={time} local="zh_CN"></TimeAgo>
          </div>
        </div>
    )
  }
}
ListItem.PropTypes = {
  className  : PropTypes.string,
  "id"       : PropTypes.string,
  "title"    : PropTypes.string.isRequired,
  "summary"  : PropTypes.string,
  "headPic"  : PropTypes.string,
  "author"   : PropTypes.string,
  "time"     : PropTypes.number.isRequired,
  "type"     : PropTypes.string,
  "category" : PropTypes.string,
  "tag"      : PropTypes.array,
  "path"     : PropTypes.string.isRequired
}
export default ListItem;
