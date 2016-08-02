import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Dashboard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="text-center">
        <h2>Welcome to</h2>
        <h1>Park &#38; Pay</h1>
        <h3></h3>
        {/*
           <h2><span className="label label-primary">Pick</span> | <span className="label label-warning">Park</span> | <span className="label label-danger">Pay</span></h2>
        */}
        <br />
        <Link to="reserve" type="button" className="btn btn-info col-xs-10 col-xs-offset-1">Reserve a Spot</Link>
        <br />
        <Link to="properties" type="button" className="btn btn-success col-xs-10 col-xs-offset-1">Check Avaliable Spot</Link>
      </div>
    )
  }
}
