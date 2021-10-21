import {Mongoose, Schema, model, connect} from 'mongoose';
//
// // 1. Create an interface representing a document in MongoDB.
// interface QQ {
//     name: string;
//     email: string;
// }
//
// // 2. Create a Schema corresponding to the document interface.
//
// const schema = new Schema<QQ>({
//     name: {type: String, required: true},
//     email: {type: String, required: true},
// });

var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    _enabled: Boolean
});
module.exports = model('users', userSchema);