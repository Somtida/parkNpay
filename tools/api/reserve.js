import { Router } from 'express'
const router = Router();

import Reserve from '../db/Reserve'

router.get('/', (req, res) => {
  Reserve.find({}, (err, reservations) => {
    return res.status(err ? 400 : 200).send(err || reservations);
  })
})

router.post('/', (req, res) => {
  // let expirationTime = new Date.now();
  console.log('res.body: ', res.body);
  Reserve.create(req.body, (err, reservation) => {
    return res.status(err ? 400 : 200).send(err || reservation);
  })
})

router.delete('/', (req, res) => {
  Reserve.remove({}, (err) => {
    return res.status(err ? 400 : 200).send(err);
  })
})

// router.put('/', (req, res) => {
//   console.log(req.body);
//   Reserve.findByIdAndUpdate(req.body._id, req.body, 'new', (err, tenant) => {
//     if (err) return res.status(400).send(err);
//     Reserve.find({}, (err, tenants) => {
//       return res.status(err ? 400 : 200).send(err || tenants)
//     })
//   });
// })
//
// router.delete('/:id', (req, res) => {
//   Reserve.findByIdAndRemove(req.params.id, (err, removed) => {
//     if (err) return res.status(400).send(err);
//     Reserve.find({}, (err, tenants) => {
//       return res.status(err ? 400 : 200).send(err || tenants)
//     })
//   })
// })

export default router
