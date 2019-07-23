require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d36092fc7e6da619240103b').then(() => {
  return Task.countDocuments({ completed: false })
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})