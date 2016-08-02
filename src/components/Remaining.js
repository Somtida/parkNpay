import React, { Component } from 'react'
// import
export default class Remaining extends Component {
  constructor(props){
    super(props);
  }
  getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
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
          Date.now()
        </div>


      </div>
    )
  }
}
