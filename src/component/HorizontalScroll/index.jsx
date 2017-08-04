import React from 'react';
import PropTypes from 'prop-types';
export default class HorizontalScroll extends React.Component {
  render() {
    let width = 0;
    return(
      <div style={style.wrap}>
        <div style={style.inner}>
          {this.props.children?(
            this.props.children.map((e,i)=>{
              const width = e.props.style.width;
              return(
                React.cloneElement(e,{
                  key:i,
                  style: Object.assign({minWidth:width},e.props.style)
                })
              )
            })
          ):''}
        </div>
      </div>
    )
  }
}

const style = {
  wrap:{
    overflowX: 'auto',
    overflowY: 'hidden',
    overflowScrolling: 'touch',
    WebkitOverflowScrolling:'touch'
  },
  inner:{
    width:'auto',
    display:'flex',
    flexDirection:'row'
  },
  item:{
    marginRight:'10px'
  }
}
