import {Schema,model} from 'mongoose'
import bcrytpt from 'bcryptjs'

const userSchema =new Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    roles:[{
        ref:"Role",
        type: Schema.Types.ObjectId
    },],},{
        timestamps:true,
        versionKey:false,
    }
);

userSchema.statics.encryptPassword=async(password)=>{
  const salt = await bcrytpt.genSalt(10)
  return await bcrytpt.hash(password,salt)
}

userSchema.statics.comparePassword = async(password,receivedPassword)=>{
    return await bcrytpt.compare(password,receivedPassword)
}

export default model('User',userSchema) ;