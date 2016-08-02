import mongoose, { Schema } from 'mongoose'

let Reserve;
let customerSchema = Schema({
  name: String,
  email: String,
  phone: String,
})
let reserveSchema = Schema({
  lot: String,
  spot: String,
  duration: String,
  price: String,
  transaction: String,
  customers: [customerSchema],
  // time: {type: Date, default: Date.now},
  // expirationTime: {type: Date, default: expire},
});

// function expire(){
//   return Date.now()+3600000;
// }
Reserve = mongoose.model('Reserve', reserveSchema);

export default Reserve;
