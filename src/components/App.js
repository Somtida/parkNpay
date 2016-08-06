import React, { Component } from 'react'
import { Link } from 'react-router'
// import NavBar from './NavBar'

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let bg = {
      backgroundImage: "url('http://bgfons.com/upload/asphalt_texture3729.jpg')",
      backgroundRepeat: "repeat",
      minHeight: "100vh",
    }
    return (
      <div className="text-center" style={bg}>
        {/*<NavBar />*/}
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
