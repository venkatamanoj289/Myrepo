const app = require('express')();
const http = require('http').Server(app);
import { connect } from 'mongoose';
connect("mongodb+srv://venkatmanoj289:#Manoj-4@cluster0.x913z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

import User from '../models/userModel.js';

http.listen(3000,function(){
   console.log('Server is running');
});
