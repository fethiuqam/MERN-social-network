import express from 'express';
const router = express.Router();
import User from '../models/user.js'

/* GET users listing. */
router.get('/', async function (req, res) {
    const users = await User.find();
    res.status(200).json(users);
});

export default router;
