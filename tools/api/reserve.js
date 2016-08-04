import { Router } from 'express'
const router = Router();

import Reserve from '../db/Reserve'

router.get('/', (req, res) => {
  Reserve.find({}, (err, reservations) => {
    return res.status(err ? 400 : 200).send(err || reservations);
  })
})
router.get('/:id', (req, res) => {
  console.log('req.params.id: ', req.params.id);
  Reserve.find({'lot': req.params.id}, (err, reservations) => {
    if (err) {
      return res.status(400).send(err);
    }else{
      return res.send(reservations.reduce((acc, reservation ) => {
        acc[reservation.spot] = true
        return acc
        // first iteration
        // acc = {},
        /* reservation = {
            "_id": "57a190c9d2eecb0631303f6b",
            "name": "a a",
            "email": "a@a.a",
            "phone": "12343443443",
            "lot": "57a0ed1b40c1b83b26b601dc",
            "spot": "2",
            "price": "20",
            "time": "2016-08-03T06:35:53.713Z",
            "expirationTime": "2016-08-02T07:00:00.000Z",
            "__v": 0
          }
          */
      }, {}));

    }

    // return res.status(err ? 400 : 200).send(err || reservations);

  })
})
// router.get('/', (req, res) => {
//   Reserve.find({})
//    .populate('lot')
//    .exec((err, reservations) => {
//     return res.status(err ? 400 : 200).send(err || reservations);
//   })
// })

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
//   Reserve.findByIdAndUpdate(req.body._id, req.body, 'new', (err, reservation) => {
//     if (err) return res.status(400).send(err);
//     Reserve.find({}, (err, reservations) => {
//       return res.status(err ? 400 : 200).send(err || reservations)
//     })
//   });
// })
//
// router.delete('/:id', (req, res) => {
//   Reserve.findByIdAndRemove(req.params.id, (err, removed) => {
//     if (err) return res.status(400).send(err);
//     Reserve.find({}, (err, reservations) => {
//       return res.status(err ? 400 : 200).send(err || reservations)
//     })
//   })
// })

export default router
