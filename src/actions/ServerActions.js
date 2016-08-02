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
  receiveLots(lots) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_LOTS',
      lots,
    })
  },
}

export default ServerActions
