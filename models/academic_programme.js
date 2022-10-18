const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aprogSchema = new Schema({
   id:{
    type:Number,
   },
   aprog:{
    type:String,
   },
   name:{
    type:String,

   },
   start_year:{
    type:String,

   },
   aprog_prnt:{
    type:String,

   },
   aproghindi:{
    type:String,

   },
   degreehindiname:{
    type:String,

   },
   degreename:{
    type:String,

   },

})
module.exports = mongoose.model('Aprog',aprogSchema);