import { Router } from 'express'
const router = Router();

import Reserve from '../db/Reserve'

router.get('/:id', (req, res) => {
  console.log('req.params.id: ', req.params.id);
  Reserve.find({'lot': req.params.id}, (err, reservations) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      let respObj = {};
      respObj.occupiedSpots = reservations.reduce((acc, reservation) => {
        acc[reservation.spot] = true
        return acc
      }, {});
      respObj.lotId = req.params.id;
      return res.status(200).send(respObj);
    }

    // return res.status(err ? 400 : 200).send(err || reservations);

  })
})


router.get('/', (req, res) => {
  Reserve.find({}, (err, reservations) => {
    // return res.status(err ? 400 : 200).send(err || reservations);
    if (err) {
      return res.status(400).send(err);
    }else{
      var obj = {};
      for(let i=0;i<reservations.length;i++){
        obj[reservations[i].lot] = obj[reservations[i].lot] || [];
        obj[reservations[i].lot].push(reservations[i].spot);
      }

      return res.send(obj);
      // return res.send(reservations.reduce((acc, reservation ) => {
      //   acc[reservation.lot] = new Array();
      //   acc[reservation.lot].push(reservation.spot)
      //   return acc
      // }, {}));
    }
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
