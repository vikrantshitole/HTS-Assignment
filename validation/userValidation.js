const Joi = require("joi");

module.exports= {
    login : Joi.object()
  .keys({
    email: Joi.string()
      .required(),
    password: Joi.string()
      .required()
  }),
  signup : Joi.object()
  .keys({
    
    first_name: Joi.string().max(100)
      .required(),
      last_name: Joi.string().max(100)
        .required(),
    email: Joi.string()
      .required(),
    password: Joi.string().max(200)
      .required()
  }),

}