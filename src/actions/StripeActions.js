import API from '../API'

const StripeActions = {
  getStripeResponse(token) {
    console.log('2.');
    API.getStripeResponse(token)
  },
}

export default StripeActions
