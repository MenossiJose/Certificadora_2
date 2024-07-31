const mongoose = require('mongoose');

const UserDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: false
    },
    height: {
        type: String,
        required: false
    },
    weight: {
        type: String,
        required: false
    },
    age: {
        type: String,
        required: false
    
    }
},{
    collection: 'UserInfo'
});

mongoose.model('UserInfo', UserDetailSchema);