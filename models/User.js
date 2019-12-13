const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    categories: { type: Object, default: {} },
    locations: { type: Object, default: {} }
});

mongoose.model('users', userSchema);