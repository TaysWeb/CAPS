// creating of token 
const {sign}= require('jsonwebtoken')
require('dotenv').config()

function Token(user) {
    return sign ({
        email : data.email,
        password: data.Password,
    },
    process.env.MY_SECRET_KEY ,
    {
      expiresIn :'2hr'
    })
}

module.exports = { 
    Token
} 