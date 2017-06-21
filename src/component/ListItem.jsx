import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {

  render() {
    // eslint-disable-next-line
    let {id, title,summary , headPic, author, time, type, category, tag, path, className} = this.props;
    path = "/publicContent"+path;
    let headPicDom = {},
        summaryDom = {};
    if(headPic) headPicDom = (<img src={headPic} alt="" className="headPic"/>);

    if(summary) summaryDom = (<summary>{summary}</summary>);
    return(
        <div className={className}>
          {headPicDom}
          <title>{title}</title>
          {summaryDom}
          <div className="info">
            <time datetime={time} pubdate>{time}</time>
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
