const Users = require('./Users.js') 
const Bookings =  require('./bookings.js')
module.exports = {
    users : new Users() ,
    bookings : new Bookings()
}