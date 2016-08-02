import mongoose, { Schema } from 'mongoose'

let Reserve;

let reserveSchema = Schema({
  spot: String,
  // duration: String,
  price: String,
  name: String,
  email: String,
  phone: String,
  transaction: String,
  time: {type: Date},
  expirationTime: {type: Date},
  lot: {type: Schema.Types.ObjectId, ref: 'lot'},

});

Reserve = mongoose.model('Reserve', reserveSchema);

export default Reserve;
