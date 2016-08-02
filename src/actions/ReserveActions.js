import API from '../API'

const ReserveActions = {
  getAllReservations() {
    API.getAllReservations();
  },
  addNewReserve(reservation) {
    if(reservation.duration == 'allDay'){
      reservation.time = Date.now();
      reservation.expirationTime = new Date().setHours(0,0,0,0)
    }else{
      reservation.time = Date.now();
      reservation.expirationTime = Date.now()+(reservation.duration*3600000);
    }
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
