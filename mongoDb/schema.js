const mongoose = require('mongoose') 

const studentSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    }
})

const StudentModel = mongoose.model('student', studentSchema)

module.exports = StudentModel