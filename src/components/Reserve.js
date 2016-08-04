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
          {this.props.spot ? <AddReserveForm spot={this.props.spot} lot={this.props.lot} /> : 'this spot is not avaliable'}

        </div>

      </div>
    )
  }
}
