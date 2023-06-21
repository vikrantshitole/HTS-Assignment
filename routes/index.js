const {Router } = require('express');
const userController = require('../controller/userController')
const router = Router();

router.post('/login',userController.signInUser)
router.post('/signup',userController.signUpUser)
module.exports = router