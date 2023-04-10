import { userController } from './../controllers/user.controller';
import express from 'express'

const router = express.Router()

router.post('/add', userController.addUser)
router.get('/get/:email/:password', userController.getUserByEmailAndPassword)
router.put("/updateBalance/", userController.updateUserBalance); 

export default router
module.exports=router