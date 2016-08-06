import API from '../API'

const ReserveActions = {
  getAllReservations() {
    API.getAllReservations();
  },
  getReservation(lotId) {
    API.getReservation(lotId);
  },
  addNewReserve(reservation) {
    API.addNewReserve(reservation);
  },
  getReservationsForLot(id) {
    API.getReservationsForLot(id);
  },


}

export default ReserveActions
