import React from 'react';
//import PropTypes from 'prop-types';
class Loading extends React.Component {
  render() {
    const style={
      textAlign   :   "center"
    };
    return(
      <div className="loading" style={style}>Loading....</div>
    )
  }
}

export default Loading;
