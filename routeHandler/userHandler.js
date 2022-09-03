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

module.exports = router;
