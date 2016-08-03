import React, { Component } from 'react';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Welcome to</h2>
        <h1>Park &#38; Pay</h1>

        <h3><span className="label label-primary">Pick</span> | <span className="label label-warning">Park</span> | <span className="label label-danger">Pay</span></h3>
        <br />
      </div>
    )
  }
}
