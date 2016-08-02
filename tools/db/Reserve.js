import mongoose, { Schema } from 'mongoose'

let Reserve;
// let customerSchema = Schema({
//   name: String,
//   email: String,
//   phone: String,
// })
let reserveSchema = Schema({
  lot: String,
  spot: String,
  duration: String,
  price: String,
  name: String,
  email: String,
  phone: String,
  transaction: String,
  time: {type: Date},
  expirationTime: {type: Date},
  // customers: customerSchema,
  // time: {type: Date, default: Date.now},
  // expirationTime: {type: Date, default: expire},
});

// function expire(){
//   return Date.now()+3600000;
// }
Reserve = mongoose.model('Reserve', reserveSchema);

export default Reserve;
