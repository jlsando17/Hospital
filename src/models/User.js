import {Schema,model} from 'mongoose'

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

userSchema.statics.encryptPassword=async(password)=>{}

userSchema.statics.comparePassword = async(password,receivedPassword)=>{}

export default userSchema;