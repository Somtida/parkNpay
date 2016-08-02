import { Router } from 'express'
const router = Router();

import reserve from './reserve'
import lot from './lot'

router.use('/reserve', reserve);
router.use('/lot', lot);

export default router
