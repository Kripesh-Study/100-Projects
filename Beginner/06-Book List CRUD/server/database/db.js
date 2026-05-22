import mongoose from "mongoose"

const checkConnection = async () =>{
  try {
      await mongoose.connect(process.env.MONGODB_URI)
      console.log("connection successful")
  } catch (error) {
    console.log("connection canot established")
  }
}

export default checkConnection;