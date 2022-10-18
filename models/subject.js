const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const branch = require('./branch')

const subjectSchema = new Schema({
    subjectName : {
        type : String,
        required : true
    },
    subjectCode : {
        type : String,
        required :true,
    },
    subjectType :{
        type : String,
        enum :['compulsory','elective'],
    },
    subjectCoordinator:{
        type:String
    }

})

module.exports = mongoose.model('Subject',subjectSchema);