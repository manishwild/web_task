import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  surName: {
    type: String,
    required: true
  },
  birthDay:{
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true,
  
  },
  address: {
    type: String,
    required: true
  }
})

const User =  mongoose.model('Users', userSchema)

export default User