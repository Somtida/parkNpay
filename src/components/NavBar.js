import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavBar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="col-xs-12">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Park&#38;Pay</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-right">
              <li><Link to="reserve">Reserve Spot</Link></li>
              <li><Link to="remaining">Time Remaining</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}
