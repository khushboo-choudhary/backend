const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: {type:String, required:true},
    name: {type:String, required: true},
    email: {type:String, required: true},
    salary: {type:String, required: true}
},
{
    versionKey: false
});

const User = mongoose.model("user",UserSchema);
module.exports = User;
