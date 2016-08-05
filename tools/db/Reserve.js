import mongoose, { Schema } from 'mongoose'

let Reserve;

let reserveSchema = Schema({
  name: String,
  email: String,
  phone: String,
  spot: String,
  // duration: String,
  price: String,
  transaction: {},
  time: {type: Date, default: Date.now},
  expirationTime: {type: Date},
  lot: {type: Schema.Types.ObjectId, ref: 'lot'},

});

Reserve = mongoose.model('Reserve', reserveSchema);

export default Reserve;
