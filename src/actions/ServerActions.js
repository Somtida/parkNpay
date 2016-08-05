import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveStripeResponse(stripeObj) {
    console.log('5. dispatching stripe');
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_STRIPE',
      stripeObj,
    })
  },
  receiveReservations(reservations) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_RESERVATIONS',
      reservations,
    });
  },
  receiveLotReservation(reservation) {
    console.log('5. dispatching');
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_LOT_RESERVATION',
      reservation,
    })
  },
  receiveAddReservation(reservation) {
    console.log('5. dispatching');
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_ADD_RESERVATION',
      reservation,
    })
  },
  receiveLots(lots) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_LOTS',
      lots,
    })
  },
  receiveReservationsForLot(reservations) {
    // {
    //   lotId: 1235656,
    //   occupiedSpots: {
    //     "1": true,
    //     "3": true
    //   }
    // }
    console.log(reservations)
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_RESERVATIONS_FOR_LOT',
      reservations,
    })
  },

}

export default ServerActions
