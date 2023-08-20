import {Schema, model, Types} from "mongoose";

const schema = new Schema({
    from: {type: String, require: true},
    to: {type: String, require: true, unique:true},
    code: {type: String, require: true, unique:true},
    date: {type: Date, default: Date.now},
    clicks: {type: Number, default: 0},
    owner: {type: Types.ObjectId, ref: "User"}
})
export default model('Link', schema)