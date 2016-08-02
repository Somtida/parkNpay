import React, { Component } from 'react'
import AddReserveForm from './AddReserveForm'

import ReserveActions from '../actions/ReserveActions'
import ReservationStore from '../stores/ReservationStore'

let _getComponentState = () => {
  return {
    reservations: ReservationStore.getAllReservations()
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
    return (
      <div className="text-center">
        {/*<h1 className="alert alert-info">Reserve</h1>*/}

        <div className="col-xs-12">
          <AddReserveForm />
        </div>

      </div>
    )
  }
}
