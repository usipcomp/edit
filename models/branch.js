const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Subject = require('./subject')

const branchSchema = new Schema({
    branchName : {
        type : String,
        required : true
    },
    branchCode : {
        type : String,
        required :true,
    },
    subjects : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subject'
        }
    ]


})
module.exports = mongoose.model('Branch',branchSchema);