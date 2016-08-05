import { Router } from 'express'

const router = Router()
import Reserve from '../db/Reserve'
const stripe = require('stripe')('sk_test_f1tvlQPMaPuzQzyBBr575KN6')

router.post('/', (req, res) => {
  console.log('req.body: ', req.body);
  let lot = req.body.lot;
  let spot = req.body.spot;
  let customerInfo = req.body.customerInfo;
  let chargeDetails = req.body.chargeDetails;


  // res.send();
  // console.log('id: ', req.body['chargeDetails[id]']);
  // console.log('amount: ', req.body['chargeDetails[amount]']);
  //
  stripe.charges.create({
    amount: (chargeDetails.amount)*100, // amount in cents
    currency: "usd",
    source: chargeDetails.id,
    description: "Example charge",
  }, (err, charge) => {
    if (err) return res.status(400).send(err);

      Reserve.create({
        name: customerInfo.name,
        email: customerInfo.email,
        phone: customerInfo.phone,
        spot: spot,
        price: lot.price,
        transaction: charge,
        lot: lot._id,
        // expirationTime: ,

      }, (err, reservation) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send({charge: charge, reservation: reservation});
      })





      // console.log('charge: ', charge);
      // let reservationDetails = req.body.reservationDetails;
      // reservationDetails.transaction = charge.balance_transaction;
      // console.log('reservation: ',req.body.reservationDetails);
      // Reserve.create(req.body.reservationDetails, function(err, reservation) {
      //   return res.status(200).send({charge:charge, reservation: reservation});
      // })
  })
  // res.redirect('/')
})

export default router
