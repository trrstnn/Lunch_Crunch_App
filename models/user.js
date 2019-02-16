const mongoose = require('mongoose');
Schema = mongoose.Schema;
const Meal = require('./meal');

const UserSchema = new Schema({
    name: String,
    budget: Number,
    streak: Number,
    image: String,
    meals: [Meal.schema]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;