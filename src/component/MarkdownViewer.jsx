import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import TimeAgo from 'timeago-react';
import {parseMarkDown} from './Utils';
const MarkdownViewer = ({content}) => {

    const {json, md} = parseMarkDown(content);
    const {title, time} = json;
    return(
      <article>
        <header>
          <h1>{title}</h1>
          <TimeAgo datetime={time} locale={navigator.language.replace(/-/,'_')}/>
        </header>
        <Markdown source={md}/>
      </article>
    )

}
MarkdownViewer.PropTypes={
  content:PropTypes.string.isRequired
}
export default MarkdownViewer;
