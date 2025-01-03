const app = require('express')();
const http = require('http').Server(app);
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://venkatmanoj289:Manoj4@cluster0.x913z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const User = require('./models/userModel.js');
async function insert()
{
    await User.create({
        name:'Sandeep',
        email:'sandeep183@gmail.com'
    });
}
insert();
http.listen(3000,function(){
   console.log('Server is running');
});
