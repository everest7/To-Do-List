const mongoose = require('mongoose')

mongoose.connect(process.env.MONDB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
