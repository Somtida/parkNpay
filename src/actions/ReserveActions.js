import API from '../API'

const ReserveActions = {
  getAllReservations() {
    API.getAllReservations();
  },
  addNewReserve(reservation) {
    
    console.log('2. get reservation: ', reservation);
    API.addNewReserve(reservation);
  },
  updateTenant(tenant) {
    API.updateTenant(tenant);
  },
  deleteTenant(id) {
    API.deleteTenant(id);
  },
}

export default ReserveActions
