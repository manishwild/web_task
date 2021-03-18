import mongoose from 'mongoose'
// making mongo db connection
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
    
  }
}
// making user schema
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

export const User =  mongoose.model('Users', userSchema)

//export default connectDB
