import { Router } from 'express'
const router = Router();

import reserve from './reserve'

router.use('/reserve', reserve);

export default router
