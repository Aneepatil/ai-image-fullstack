import mongoose from "mongoose";

const connectDB = async(url)=>{
    mongoose.set('strictQuery',true)

    mongoose.connect(url).then(()=>console.log('MongoDB connected Succesfully')).catch((err)=> console.log(err))
}

export default connectDB;