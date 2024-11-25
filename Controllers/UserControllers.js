const mongoose = require('mongoose');
const User = require('../Models/UserModel');

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

const getUserByID = async (req,res) =>{

    try {
        const user = await User.findById(req.params._id);
        if(!user){
            res.status(400).json("User Not Found");
        }
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).send({error:error.message});
    }

}

const deleteUserById = async(req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params._id);
        if(!user){
            res.status(400).json("User Not Found");
        }
        res.status(200).json(`${user}  User Deleted Successfully`);

    } catch (error) {
        res.status(500).send({error:error.message});
    
    }
}

const updateById = async(req,res) => {
    try {
        const {name,address,email} = req.body;
        const user = await User.findByIdAndUpdate(req.params._id,{name,address,email},{new:true});
        if(!user){
            res.status(400).json("User Not Found");
        }
        res.status(200).json(`${user}  User Deleted Successfully`);

    } catch (error) {
        res.status(500).send({error:error.message});
    
    }
}

module.exports = {UserCreate,getUsers,getUserByID,deleteUserById,updateById};