const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true // name field is required
  },
  email: {
    type: String, 
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Please enter more valid password.')
      }
    }
  },
  age: {
    type: Number,
    validate(value) { // validate function 
      if (value < 0) {
        throw new Error('Age must be a positive number.')
      }
    }
  }
})

module.exports = User