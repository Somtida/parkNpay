import { Router } from 'express'

const router = Router()
const stripe = require('stripe')('sk_test_f1tvlQPMaPuzQzyBBr575KN6')

router.post('/', (req, res) => {
  console.log('req.body: ', req.body.id);
  // res.send();
  var tokenId = req.body.id;

  stripe.charges.create({
    amount: 1000, // amount in cents
    currency: "usd",
    source: tokenId,
    description: "Example charge",
  }, (err, charge) => {
    if (err) return res.status(400).send(err);
    console.log('charge: ', charge);
    return res.status(200).send(json(charge));
  })
  // res.redirect('/')
})

export default router
