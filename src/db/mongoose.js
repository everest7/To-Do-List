const mongoose = require('mongoose')

// MONGODB_URL is set on another file to security
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
