const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Task = require('../models/task')


router.post('/tasks', auth, async (req, res) => {
  // const task = new Task(req.body)
  // Take the req.body and add owner to the task
  console.log(req.user)
  const task = new Task({
    ...req.body,
    owner: req.user._id
  })
  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send()
  }
})

router.get('/tasks', auth, async (req, res) => {
try {
  // const tasks = await Task.find({ owner: req.user._id })
  await req.user.populate('tasks').execPopulate()
  res.send(req.user.tasks)
} catch (e) {
  res.status(500).send()
}

})

router.get('/tasks/:id', auth, async (req, res) => {
const _id = req.params.id
try {
  // const task = await Task.findById(_id)
  const task = await Task.findOne({ _id, owner: req.user._id })
  if (!task) {
    return res.status(404).send()
  }
  res.status(200).send(task)
} catch (e) {
  res.status(500).send(e)
}
})

// Update task
router.patch('/tasks/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['description', 'completed']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  if (!isValidOperation) {
    return res.status(400).send({error: 'Invalid updates'})
  }

  try {
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
    // const task = await Task.findById(req.params.id)
    // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators: true})
    if (!task) {
      return res.status(404).send()
    }
    updates.forEach((update) => task[update] = req.body[update])
    await task.save()
    res.send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

// Delete task
router.delete('/tasks/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
    console.log(task)
    if (!task) {
      return res.status(404).send()
    }
    res.send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router