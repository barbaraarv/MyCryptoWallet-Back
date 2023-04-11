import { userCryptoController } from './../controllers/userCrypto.controller';

import express from 'express'

const router = express.Router()

router.post('/add', userCryptoController.addUserCrypto)
router.get('/get/:w_userid/:w_cryptoid', userCryptoController.getUserCryptoByUserAndCrypto)
router.get('/get/:w_userid', userCryptoController.getAllCryptoByAnUser)
router.put("/updateAmount/", userCryptoController.updateUserCryptoAmount); 


export default router
module.exports=router