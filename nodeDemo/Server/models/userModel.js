import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name:String,
    email:String
});
model('User',userSchema);