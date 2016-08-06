import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _reservations = [];
let _reservation = [];
let _reservationsByLot = {};

// {
//   _lotId: {
//     "1": true,
//     "2": true
//   }
// }

class ReservationStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case 'RECEIVE_RESERVATIONS':
          _reservations = action.reservations;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ADD_RESERVATION':
          _reservation.push(action.reservation);
          this.emit('CHANGE');
          break;
        case 'RECEIVE_LOT_RESERVATION':
          _reservation = action.reservation;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_RESERVATIONS_FOR_LOT':
          let { reservations } = action
          _reservationsByLot[reservations.lotId] = reservations.occupiedSpots;
          // console.log('RESERVATIONS BY LOT', _reservationsByLot)
          this.emit('CHANGE');
          break;
        case 'RECEIVE_STRIPE':
          let reservation = action.stripeObj.reservation;
          let lotId = reservation.lot;
          _reservationsByLot[lotId][reservation.spot] = true;
          // console.log('_reservationsByLot: ', _reservationsByLot);
          this.emit('CHANGE');
          break;
      }
    });
  }

  getOccupiedSpots(id) {
    return _reservationsByLot[id];
  }

  getAllReservations() {
    console.log('8.');
    return _reservations;
  }
  getReservation() {
    console.log('8.');
    return _reservation;
  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }
}

export default new ReservationStore();
