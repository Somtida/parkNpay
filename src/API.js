import { get, post, ajax } from 'jquery'

import ServerActions from './actions/ServerActions'

const API = {
  addNewReserve(reservation) {
    console.log('3. posting to server: ', reservation);
    post('/api/reserve', reservation)
    .done(response => {
      console.log('4. get response from Server');
      ServerActions.receiveOneReservation(response)
    })
  },

  getAllReservations() {
    get('/api/reserve')
      .done(response => { ServerActions.receiveReservations(response) })
  },


//   updateTenant(tenant) {
//     // ajax({
//     //   url: '/api/tenants',
//     //   method: 'PUT',
//     //   contentType: 'application/json',
//     //   data: JSON.stringify(tenant),
//     //   success: (res) => {
//     //     console.log(res);
//     //   }
//     // })
//     fetch('/api/reserve', {
//       method: 'PUT',
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       }),
//       body: JSON.stringify(tenant)
//     })
//       .then((res) => res.json())
//       .then(data => {
//         console.log(data);
//       })
//   },
//
//   deleteTenant(tenantID) {
//     fetch('/api/reserve/' + tenantID, {
//       method: 'DELETE'
//     })
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//         ServerActions.receiveTenants(data)
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }
}

export default API
