import mongoose from 'mongoose'

const checkConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to the db")
    } catch (error) {
        console.log("cannot connect to the db")
    }
}


export default checkConnection;