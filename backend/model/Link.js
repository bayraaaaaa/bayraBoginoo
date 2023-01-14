import mongoose from "mongoose";


const LinkSchema = new mongoose.Schema({
    Longlink:{
        type: String,
        required:[true],
    },
    Shortlink:{
        type:String,
    }
})


const Link = mongoose.model("Link", LinkSchema );



export default Link