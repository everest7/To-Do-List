require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('5d35f2332cebc65fdf106591', {age: 12}).then((user) => {
//   console.log(user)
//   return User.countDocuments({age: 12})
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })


// const updateAgeAndCount = async (id, age) => {
//   const user = await User.findOneAndUpdate(id, { age })
//   const count = await User.countDocuments({ age })
//   return count
// }

// updateAgeAndCount('5d35f2332cebc65fdf106591', 8).then((count) => {
//   console.log(count)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('5d3606227afb06613ef4c47d').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})