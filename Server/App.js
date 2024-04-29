const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const bcrypt = require('bcryptjs');

const mongoURI = 'mongodb+srv://josemenossi:Drgjuv50!@cluster0.04ecmcj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

require('./UserDetails');

const User = mongoose.model('UserInfo');

app.get('/', (req, res) => {
    res.send({status: 'Server is running'});
});

app.post('/signup', async(req, res) => {
    const {name, email, password} = req.body;

    const oldUser = await User.findOne({email});

    if(oldUser){
        return res.send({status:"error", data: "Email already exists"});
    }

    const encryptedPassword = await bcrypt.hash(password, 12);

    try{
        await User.create({
            name:name,
            email:email, 
            password:encryptedPassword
        });

        res.send({status:"ok", data: "User created"});
    }
    catch(err){
         res.send({status:"error", data: err});
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});