const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userSchema = require('../schemas/userSchema');
const User = new mongoose.model('Random', userSchema);


// Create User---------->
router.post('/save', async (req, res) => {
    try {
        
        const newUser = new User({
            id: req.body.id,
            gender: req.body.gender,
            name: req.body.name,
            contact: req.body.contact,
            address: req.body.address,
            imgUrl: req.body.imgUrl
        });
        await newUser.save();
        res.status(200).json({
            "message": 'User Create Successful!'
        });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            "message": 'Create Failed user!'
        });
    }
});

//Get all user api---------->
router.get('/all', async(req, res)=>{
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        console.log('Error::', error)
    }
});

//Get random user api------->
router.get('/random', async(req, res)=>{

});

//Update one user----------------->
router.patch('/update/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        const updateUser = await User.findByIdAndUpdate(_id, req.body, {new: true});
        res.send(updateUser)
    }
    catch(error){
        console.log("Error::", error)
    }
});

// Update multi user-------->
router.patch('/bulk-update', async(req, res)=>{

});

//Delete a user-------->
router.delete('/delete', async(req, res)=>{

});

module.exports = router;
