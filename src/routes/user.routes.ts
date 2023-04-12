import { userController } from './../controllers/user.controller';
import express from 'express'

const router = express.Router()

router.post('/add', userController.addUser)
router.get('/all', userController.getAllUsers)
router.get('/get/:email/:password', userController.getUserByEmailAndPassword)
router.get('/get/:id', userController.getUserById)
router.put("/updateBalance/", userController.updateUserBalance); 

export default router
module.exports=router