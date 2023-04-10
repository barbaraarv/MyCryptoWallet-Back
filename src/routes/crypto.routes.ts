import { cryptoController } from './../controllers/crypto.controller';
import express from 'express'


const router = express.Router()

router.get('/all', cryptoController.getAllCrypto)
router.get('/get/:id', cryptoController.getCryptoById)


export default router
module.exports=router