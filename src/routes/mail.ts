

import express from 'express'
import { sendMail } from '../controllers'
const router = express.Router()

router.post('/mail',sendMail)

export default router
