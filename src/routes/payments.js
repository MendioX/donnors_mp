import { Router } from "express";

import { createOrder } from "../controllers/controller.js";


const router = Router()

router.get('/create-order', createOrder)

router.get('/succes', (req,res) => res.send('succes'))

router.get('/webhook', (req,res) => res.send('webhook'))


export default router