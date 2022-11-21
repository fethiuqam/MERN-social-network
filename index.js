import dotenv from 'dotenv';
import mongoose from 'mongoose'
import {log} from "debug";
import app from './app.js';

async function main() {
    dotenv.config();
    const PORT = process.env.DEV_PORT;
    try {
        await mongoose.connect(process.env.DEV_MONGODB_URI);
        app.listen(PORT,
            () => log('server running on http://localhost:' + PORT));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

main().catch(console.error);