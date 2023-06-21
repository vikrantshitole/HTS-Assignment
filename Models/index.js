const mongoose = require('mongoose');
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9tunymx.mongodb.net/HTS`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error);
    }
  }
  module.exports = connectDB