const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requrests are disabled')
//   } else {
//     next() // indicate the middleware is done
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('Site is currently down')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
  // const task = await Task.findById('5d37fbc4707639710a37c3b2')
  // await task.populate('owner').execPopulate() // Get which user created the task
  // console.log(task.owner)
  const user = await User.findById('5d37f9fc21045870d15678f8')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)

}

// main()