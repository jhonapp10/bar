const mongoose= require('mongoose');
require('dotenv').config();

user= process.env.user;
db= process.env.db;
password= process.env.password;

const URI='mongodb://localhost:27017/?authSource=app&directConnection=true'



mongoose.connect(URI).then(db=> console.log('conected'))
.catch(err=> console.log(err))
