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
    type: Number,
    required: true
  },
  phoneNo: {
    type: Number,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', userSchema)

export default User