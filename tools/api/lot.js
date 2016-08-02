import { Router } from 'express'
const router = Router();

import Lot from '../db/Lot'

router.get('/', (req, res) => {
  Lot.find({}, (err, lots) => {
    return res.status(err ? 400 : 200).send(err || lots);
  })
})

router.post('/', (req, res) => {
  // let expirationTime = new Date.now();
  console.log('res.body: ', res.body);
  Lot.create(req.body, (err, lot) => {
    return res.status(err ? 400 : 200).send(err || lot);
  })
})

router.delete('/', (req, res) => {
  Lot.remove({}, (err) => {
    return res.status(err ? 400 : 200).send(err);
  })
})

// router.put('/', (req, res) => {
//   console.log(req.body);
//   Lot.findByIdAndUpdate(req.body._id, req.body, 'new', (err, lot) => {
//     if (err) return res.status(400).send(err);
//     Lot.find({}, (err, lots) => {
//       return res.status(err ? 400 : 200).send(err || lots)
//     })
//   });
// })
//
// router.delete('/:id', (req, res) => {
//   Lot.findByIdAndRemove(req.params.id, (err, removed) => {
//     if (err) return res.status(400).send(err);
//     Lot.find({}, (err, lots) => {
//       return res.status(err ? 400 : 200).send(err || lots)
//     })
//   })
// })

export default router
