import dotenv from 'dotenv';
import mongoose from 'mongoose'
import {log} from "debug";
import app from './app.js';
import User from './models/user.js'


async function main() {
    dotenv.config();
    const PORT = process.env.DEV_PORT;
    try {
        await mongoose.connect(process.env.DEV_MONGODB_URI);
        const countUsers = await User.find().count();
        log(countUsers);
        if(countUsers === 0){
            const user1 = new User ({email: "fethibey@gmail.com" , pseudo : "fethiuqam"})
            await user1.save();
        }
        app.listen(PORT,
            () => log('server running on http://localhost:' + PORT));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

main().catch(console.error);