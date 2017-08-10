import React from 'react';
import PropTypes from 'prop-types';
export default class HorizontalScroll extends React.Component {
  render() {
    let width = 0;
    return(
      <div style={this.props.style ? Object.assign({},this.props.style, style.wrap) : style.wrap}>

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
    )
  }
}

HorizontalScroll.propTypes={
  style: PropTypes.object
}

const style = {
  wrap:{
    overflowX: 'auto',
    overflowY: 'hidden',
    overflowScrolling: 'touch',
    WebkitOverflowScrolling:'touch',
    display:'flex',
    flexDirection:'row'

  },
  item:{
    marginRight:'10px'
  }
}
