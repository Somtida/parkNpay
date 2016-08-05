import { get, post, ajax } from 'jquery'

import ServerActions from './actions/ServerActions'

const API = {
  addNewReserve(reservation) {
    if(reservation.duration == 'allDay'){
      reservation.time = Date.now();
      reservation.expirationTime = new Date().setHours(0,0,0,0)
    }else{
      reservation.time = Date.now();
      reservation.expirationTime = Date.now()+(reservation.duration*3600000);
    }

    console.log('3. posting to server: ', reservation);
    post('/api/reserve', reservation)
    .done(response => {
      console.log('4. get response from Server');
      ServerActions.receiveAddReservation(response)
    })
  },

  getAllReservations() {
    get('/api/reserve')
      .done(response => { ServerActions.receiveReservations(response) })
  },
  getReservation(lotId) {
    console.log('lotId API: ', lotId);
    get(`/api/reserve/${lotId}`)
      .done(response => { ServerActions.receiveLotReservation(response) })
  },

  getAllLots() {
    get('/api/lot')
      .done(res => {ServerActions.receiveLots(res)})
  },

  getReservationsForLot(id) {
    get('/api/reserve/' + id)
      .done(res => ServerActions.receiveReservationsForLot(res))
  },
  getStripeResponse(payload) {
    console.log('3. sent to payload API: ', payload);
    post('/api/payment', payload)
      .done(res => {
        console.log('4. receive transaction');
        ServerActions.receiveStripeResponse(res)
      })

  },

}

export default API
