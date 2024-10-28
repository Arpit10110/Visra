import mongoose from "mongoose";
const connectdb = async()=>{
    mongoose.connect(process.env.NEXT_PUBLIC_MongooseUrl,{dbName:"Visra"}).then(()=>{
        console.log("db connected");
    }).catch((e)=>{
        console.log(e);
    })
}

export default connectdb;