import API from '../API'

const ReserveActions = {
  getAllReservations() {
    API.getAllReservations();
  },
  getReservation(lotId) {
    API.getReservation(lotId);
  },
  addNewReserve(reservation) {
    console.log('2. get reservation: ', reservation);
    API.addNewReserve(reservation);
  },

}

export default ReserveActions
