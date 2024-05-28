
import express from 'express'
import { getMessage } from "../controllers/test.js"

const router = express.Router()

router.get('/message', getMessage)


export { router };