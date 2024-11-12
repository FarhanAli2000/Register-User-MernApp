import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true                                              //finish blank spaces from the name
},
email:{
    type:String,
    required:true,
    unique:true                                           //only one email is for one user 
},
password:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
role:{
    type:Number,
    default:0
}
},{timestamps:true})
export default mongoose.model('users',userSchema)