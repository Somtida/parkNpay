import React, { Component } from 'react';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let styles = {
      color: '#fff',
    }
    let bigFont = {
      fontSize: "85px",
      fontWeight: "bolder",
    }
    return (
      <div style={styles}>
        <h2>Welcome to</h2>
        <h1 style={bigFont}>Park &#38; Pay</h1>

        <h3><span className="label label-primary">Pick</span> | <span className="label label-warning">Park</span> | <span className="label label-danger">Pay</span></h3>
        <br />
      </div>
    )
  }
}
