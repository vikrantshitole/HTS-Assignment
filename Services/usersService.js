const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const signUpUser = (reqData) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            let user = await User.findOne({email:reqData.email})
            if (user) {
                reject({message: 'User Already exist with email ' + reqData.email})
            }
            reqData.password = bcrypt.hashSync(reqData.password,8)
            await User.create(reqData)
            resolve({message: 'User Created Successfully'})
        }catch(err){
            console.error(err);
            reject({message: 'Error Creating User'})
        }
    })
}
const signInUser = (reqData) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            let user = await User.findOne({email:reqData.email})
            if (!user) {
                return reject({message: 'User does not exist with email ' + reqData.email})
            }
            reqData.password = bcrypt.hashSync(reqData.password,8)
            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
              );
              if (!passwordIsValid) {
                return reject({message: 'Password is incorrect'})
              }
              const token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400, // 24 hours
              });
              return resolve({user,token})
             
            //  return resolve({message: 'User Created Successfully'})
        }catch(err){
            console.error(err);
            reject({message: 'Error Signing In User'})
        }
    })
}
module.exports = {
    signInUser,
    signUpUser
}