const mongoose = require('mongoose');
const User = require('../Models/UserModel');
const { json } = require('body-parser');
const UserCreate = async (req,res) => {
            try {
                const user = new User(req.body);
                await user.save();
                res.status(201).send('User Register Successfully..');
                
            } catch (error) {
                res.status(400).send({error:error.message});
            }
}

const getUsers = async (req,res) => {
    try {
            const getAllUsers =  await  User.find();
            res.status(200).json(getAllUsers);

    } catch (error) {
        res.status(400).send({error:error.message});
    }
}


module.exports = {UserCreate,getUsers};