const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  last_name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    maxlength: 200,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("users", UserSchema);

module.exports = User;
