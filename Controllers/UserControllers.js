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

const deleteUser = async(req,res) => {

    try {
        const getUser = await User.findById(req.params.id);
        console.log(getUser);
        if (!getUser) {
            res.status(400).send('User Not Found');
          }
        
          await getUser.deleteOne();
        
          res.status(200).json({ _id: req.params.id });




    } catch (error) {
        res.status(400).send({error:error.message});
    }
}


module.exports = {UserCreate,getUsers,deleteUser};