const mongoose = require('mongoose');

module.exports=()=>{
 const ContactSchema= new mongoose.Schema({
    firstName:{
        type: String,
        required: "Enter your first name"
    },
    lastName: {
        type: String,
        required: "Enter your last name"
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
})
};