const mongoose=require('mongoose');
const tableSchema=mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Table=mongoose.model('Table',tableSchema);
module.exports=Table;