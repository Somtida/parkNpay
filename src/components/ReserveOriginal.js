import React, { Component } from 'react'
import AddReserveForm from './AddReserveForm'

import ReserveActions from '../actions/ReserveActions'
import ReservationStore from '../stores/ReservationStore'

let _getComponentState = () => {
  return {
    reservations: ReservationStore.getAllReservations(),
  }
}

export default class Reservations extends Component {
  constructor(props){
    super(props);

    this.state = _getComponentState()
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    ReserveActions.getAllReservations();
    ReservationStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ReservationStore.stopListening(this._onChange)
  }

  _onChange() {
    console.log('7. updating Component state');
    this.setState(_getComponentState())
  }

  render() {

    console.log('spot in Reserve: ', this.props.spot);
    console.log('lot: ', this.props.lot._id);
    console.log('reservations: ', this.state.reservations);

    let isAvaliable = this.state.reservations.some(reservation => reservation.lot == this.props.lot._id && reservation.spot == this.props.spot );

    console.log('isAvaliable: ', isAvaliable);
    return (
      <div className="text-center">

        <div className="col-xs-12">

          {!isAvaliable ? <AddReserveForm spot={this.props.spot} lot={this.props.lot} /> : 'this spot is not avaliable'}

        </div>

      </div>
    )
  }
}
