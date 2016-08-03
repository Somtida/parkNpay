import { Router } from 'express'
const router = Router()

router.post('/', (req, res) => {
  console.log('req.body: ', req.body);
  res.redirect('/')
})

export default router
