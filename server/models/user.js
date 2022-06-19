const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");


const userSchema = new mongoose.Schema({
    username: {type:String, required: true },
    email: { type:String, required: true },
    password: { type:String, required: true },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this.id}, process.env.JWTPRIVATEKEY,{expiresIn:"7d"});
    console.log(token);
    return token
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().label("email"),
        username: Joi.string().required().label("username"),
        password: passwordComplexity().required().label("password")
    });
    return schema.validate(data)
};

module.exports = {User, validate}