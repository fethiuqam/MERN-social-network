import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    pseudo: {
        type: String,
        required: true
    }
});

export default mongoose.model('User', userSchema);