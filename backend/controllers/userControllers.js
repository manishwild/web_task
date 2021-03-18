import asyncHandler from 'express-async-handler'
import {User} from '../config/db.js'


//@desc Register a new user
//@route Post /api/users/users
//@access Public

const saveUser = asyncHandler(async(req, res) => {
  const {name, surName, birthDay, phoneNo, address} = req.body
   try {
    const userExist = await User.findOne({ name, surName })
    console.log(req.body)
    // 400 is bad request
    if (userExist) {
      res.status(400)
      throw new Error('user Alreay Exist')
    }
  
    const user = await User.create({
      name,
      surName,
      birthDay,
      phoneNo ,
      address
    })
  
    // 201 is when something is created
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        surName: user.surName,
        birthDay: user.birthDay,
        PhoneNo: user.PhoneNo,
        address: user.address
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
   } catch (error) {
     console.log(error);
   }
  
})

//@desc Get all users
//@route GET /api/users
//@access Public
const getUsers = asyncHandler(async(req, res) => {
    
  const users = await User.find({})
  console.log(users)
  res.json(users)
  
})

export {
  saveUser,
  getUsers
}