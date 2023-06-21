const {Router } = require('express');
const userController = require('../controller/userController')
const router = Router();
const validation = require('../validation/userValidation')
const {
  validate
} = require('../middleware/validationMiddleware')

router.post('/login',validate(validation.login),userController.signInUser)
router.post('/signup',validate(validation.signup),userController.signUpUser)
module.exports = router