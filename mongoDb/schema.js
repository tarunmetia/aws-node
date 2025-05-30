const mongoose = require('mongoose') 
const bcrypt = require('bcrypt');


const memberSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    }
})

const adminSchema = mongoose.Schema({
    uname: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

adminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const MemberModel = mongoose.model('member', memberSchema)
const adminModel = mongoose.model('admins', adminSchema)

module.exports = {MemberModel, adminModel}