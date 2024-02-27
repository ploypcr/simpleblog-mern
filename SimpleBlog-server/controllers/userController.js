const User = require("../models/user")
const { userCreate , checkUserPassword } = require("../repositories/userRepository")
const jwt = require('jsonwebtoken')

const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn : '1h'})
}

const login = async (req, res) => {
    try {
        const data  = await checkUserPassword(req.body)
        const token = generateToken(data._id)
        res.status(200).json({"token":token})
    } catch(err){
        res.status(400).json({"error":err.message})
        console.log(err);
    }
}

const register = async (req, res) => {
    try{
        //console.log(req.body.first_name)
        const user = await userCreate(req.body)
        const token = generateToken(data._id)
        res.status(200).json({"token":token})
    }catch (err){
        res.status(400).json({"error":err.message})
        console.log(err);
    }
}

module.exports = {login, register}