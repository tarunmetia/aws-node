const mongoose = require('mongoose') 
require('dotenv').config();
const mongoConnection = () => {
    const dbUrl = process.env.MONGO_URI;
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () => {
        console.log('connected  to db')
    }) 

    mongoose.connection.on('error', (err) => {
        console.log('Error:' + err)
    })
}

module.exports = {mongoConnection}