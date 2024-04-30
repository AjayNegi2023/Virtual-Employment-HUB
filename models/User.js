import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
