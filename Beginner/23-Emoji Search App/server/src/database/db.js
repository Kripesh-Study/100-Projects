import mongoose from 'mongoose'

const checkConnection = async () => { 
    try {
        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("connection established successfully!!")
    } catch (error) {
        console.log("connection cannot established with db!!!!");
        console.log("The error is: ", error);
    }
}


export default checkConnection;