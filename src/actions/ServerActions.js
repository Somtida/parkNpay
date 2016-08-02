import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveReservations(reservations) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_RESERVATIONS',
      reservations,
    });
  },
  receiveOneReservation(reservation) {
    console.log('5. dispatching');
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_ONE_RESERVATION',
      reservation,
    })
  },
}

export default ServerActions
