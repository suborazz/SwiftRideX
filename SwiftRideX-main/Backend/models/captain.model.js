const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long']
            }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
       select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'incative'],
        default: 'incative',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [2, 'Color must be at least 3 characters long']
        },
        plate: {
            type: String,
            required: true,
           minlength: [3, 'Plate must be at least 3 characters long']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1']
        },
        vechicalType: {
            type: String,
            enum: ['car', 'motorcycle', 'auto'],
            
        }, 
    },

    location: {
        lat:{
            type: Number,
        },
        lng:{
            type:Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this.id}, process.env.JWT_SECRET, { expiresIn: '24h'})
    return token;
}

captainSchema.methods.comparePassword = async function(Password) {
    return await bcrypt.compare(Password, this.password);
}

captainSchema.statics.hashPassword = async function(plainPassword) {
    return await bcrypt.hash(plainPassword, 10);
}


const captainModel = mongoose.model('captain',captainSchema)

module.exports = captainModel;