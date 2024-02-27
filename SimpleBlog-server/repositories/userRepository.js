const User = require("../models/user")
const bcrypt = require("bcrypt")
const validator = require("validator")
const userCreate = async function(data) {
    query = { "email": data.email }
    const exist = await User.findOne(query);
    if(exist){
        throw Error("Email already in use.")
    }
    if(!validator.isEmail(data.email)){
        throw Error("Email is not valid.")
    }
    if(!validator.isStrongPassword(data.password)){
        throw Error("Password not strong enough.")
    }

    const salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hashSync(data.password,salt)
    const newUser = new User({
        user_name : data.user_name,
        password : hash,
        email : data.email,
        first_name : data.first_name,
        last_name : data.last_name
    })

    const user = await User.create(newUser)
    return user
}
// const userFind = async function(data) {
//     query = { "email": data.email }
//     const exist = await User.findOne(query);
//     if(!exist){
//         throw Error("Doesn't have this email.")
//     }
//     return exist
// }

const checkUserPassword = async function(data) {
    query = { "email": data.email }
    const user = await User.findOne(query);
    if(!user){
        throw Error("Doesn't have this email.")
    }
    isPasswordCorrect = await bcrypt.compareSync(data.password, user.password)
    if(!isPasswordCorrect){
        throw Error("Password is incorrect")
    }
    return true
}
module.exports = { userCreate , checkUserPassword }