const usersService = require("../Services/usersService")

const signInUser = (req,res)=>{
    usersService.signInUser(req.body)
    .then(response=>{
        res.status(200).send(response)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
}

const signUpUser = (req,res)=>{
    usersService.signUpUser(req.body)
    .then(response=>{
        res.status(200).send(response)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
}
module.exports = {
    signInUser,
    signUpUser
}