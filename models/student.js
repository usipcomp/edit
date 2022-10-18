const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    stu_id:{
        type :Number,
    },
    reg_dtu:{
        type :String,
        enum:["DTU"],
    },
    req_year:{
        type:Number,

    },
    req_group:{
        type:String,
    },
    reg_id:{
        type:Number
    },
    f_name:{
        type:String,
    },
    m_name:{
       type:String, 
    },
    l_name:{
        type:String
    },
    fathername:{
        type:String,
    },
    rank:{
        type:String,
    },
    scheme_year:{
        type:String,
    },
    sp_code:{
        type:String,
    },
    aprog:{
        type:String,
    },
    photo:{
        type:String,
    },
    phone:{
        type:String,
    },
    email:{
        type:String,
    },
    address:{
        type:String,
    },
    city:{
        type:String,
    },
    pincode:{
        type:String,
    },
    sex:{
        type:String,
        enum:["Male","Female","Other"],
    },
    category:{
        type:String,
    },
    dob:{
        type:String,
    },
    gateScore:{
        type:String,
    },
    mothername:{
        type:String,
    },
    aieeeroll:{
        type:String,
    },
    comment:{
        type:String,
    },
    secid:{
        type:String,
    },
    bg:{
        type:String,
    },
    libno:{
        type:String,
    },
    campus:{
        type:String,
    },
    nationality:{
        type:String,
    },
    f_phone:{
        type:String,
    },
    m_phone:{
        type:String,
    },
    dtu_email:{
        type:String,
    }





})
module.exports = mongoose.model('Student',studentSchema);