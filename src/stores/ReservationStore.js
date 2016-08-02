import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _reservations = [];

class ReservationStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case 'RECEIVE_RESERVATIONS':
          _reservations = action.reservations;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_RESERVATION':
          console.log('6.');
          _reservations.push(action.reservation);
          this.emit('CHANGE');
          break;
      }
    });
  }

  getAllReservations() {
    console.log('8.');
    return _reservations;
  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }
}

export default new ReservationStore();
