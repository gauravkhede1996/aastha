const mongoose=require('mongoose');
// fsWTY5Xd9B7E2BC1
// gauravkhede1996
mongoose.connect('mongodb+srv://gauravkhede1996:fsWTY5Xd9B7E2BC1@cluster0.yibmeoi.mongodb.net/goeasy_aastha?retryWrites=true');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to database"));
db.once('open',function(){
    console.log("Connection with the database is successfull");
})