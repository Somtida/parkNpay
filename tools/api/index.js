import { Router } from 'express'
const router = Router();

import reserve from './reserve'
import lot from './lot'
import payment from './payment'

router.use('/reserve', reserve);
router.use('/lot', lot);
router.use('/payment', payment);

export default router
