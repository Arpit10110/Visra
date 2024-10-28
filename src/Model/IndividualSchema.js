import mongoose from "mongoose"
const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const IndividualModal =  mongoose.models.IndividualSchema || mongoose.model('IndividualSchema',Schema);

export default IndividualModal;