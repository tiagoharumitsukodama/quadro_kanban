const dotenv = require('dotenv');

dotenv.config({
    path: '../.env',
  });
  
module.exports = {
    PORT:process.env.PORT,
    ACCESS_TOKEN_SECRET:process.env.ACCESS_TOKEN_SECRET,
    USER_NAME:process.env.USER_NAME,
    USER_PASSWORD:process.env.USER_PASSWORD
};