const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/belt_exam",{useNewUrlParser:true}, (errs)=>errs?console.log(errs):console.log('db connected and gtg'))

PetSchema = new mongoose.Schema({
    name:{
        required: [true,"Name field cannot be empty."],
        type: String,
        minlength:[3,"Name must be at least 3 characters."]
    },
     type:{
        required: [true,"Type field cannot be empty."],
        type: String,
        minlength:[3,"Type must be at least 3 characters."]
    },
     description:{
        required: [true,"Description field cannot be empty."],
        type: String,
        minlength:[3,"Description must be at least 3 characters."]
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    },
    likes:{
        default:0,
        type:Number,
    }
    
}, {timestamps:true})

module.exports = mongoose.model('Pet', PetSchema)