const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const users = new Schema({
    userName :{type : String ,required : true},
    password :{type : String,required : true},
    email :{type : String,required : true},
    phoneNumber :{type : Number}
});

const Users = mongoose.model("Users", users);

module.exports = Users;