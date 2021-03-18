import express from 'express'
import { getUsers, saveUser } from '../controllers/userControllers.js'
import {User} from '../config/db.js'


const router = express.Router()

// router.get('/', as (req, res) => {
//   const users = await User.find({})
//   res.json(users)
// });
router.route('/').post(saveUser)
router.route('/form').get(getUsers)
export default router