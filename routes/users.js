import express from 'express';
const router = express.Router();
import User from '../models/user.js'

// get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// create user
router.post('/', async (req, res) => {
    const newUser = new User ({
        email : req.body.email,
        pseudo : req.body.pseudo
    });
    const result = await newUser.save();
    res.status(201).json(result);

});

export default router;
