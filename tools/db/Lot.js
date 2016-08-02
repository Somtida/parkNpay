import mongoose, { Schema } from 'mongoose'

let Lot;

let lotSchema = Schema({
  name: String,
  totalSpots: Number,
  price: Number,
});

Lot = mongoose.model('Lot', lotSchema);

export default Lot;
