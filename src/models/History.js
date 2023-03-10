import {Schema,model} from 'mongoose'

const historySchema = new Schema(
    {
    user:String,
    obs:String,
    healthState:String
},{
    timestamps:true,
    versionKey:false
})

export default model('History',historySchema);
