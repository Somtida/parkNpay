import React, { Component } from 'react'
import AddReserveForm from './AddReserveForm'
export default class Reservations extends Component {
  constructor(props){
    super(props);

  }


  render() {

    console.log('spot in Reserve: ', this.props.spot);
    console.log('lot: ', this.props.lot);
    return (
      <div className="text-center">

        <div className="col-xs-12">
          <p>status: SUCCESS</p>
          <h2>Thank you</h2>

        </div>

      </div>
    )
  }
}
