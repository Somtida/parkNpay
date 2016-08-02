import React, { Component } from 'react'

export default class Remaining extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let styles = {
      height: '100px',
      width: '100px',
      backgroundColor: '#000',
      opacity: '0.5',
      margin: '0 auto',
      borderRadius: '5px',
    };
    return (
      <div className="text-center">
        <h1>Time Remaining</h1>
        <div style={styles}>
          
        </div>


      </div>
    )
  }
}
