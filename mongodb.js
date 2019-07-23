// CRUD create read update delete

const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

// const { mongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

mongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // Delete!!!
  // db.collection('users').deleteMany({
  //   age: 27
  // }).then((result) => {
  //   console.log(result.deletedCount)
  // }).catch((error) => {
  //   console.log(error)
  // })
  db.collection('tasks').deleteOne({
    desription: "finish homework7"
  }).then((result) => {
    console.log(result.deletedCount)
  }).catch((error) => {
    console.log(error)
  })

  // Update!!!
  // db.collection('users').updateOne({
  //   _id: new ObjectID("5d354b5f78eefd5b3cc44bf3") // convert string to binary 
  // }, {
  //   $inc: {
  //     age: -1
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })


  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }).then((result) => {
  //   console.log(result.modifiedCount)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // Read!!!
  // db.collection('users').findOne({_id: new ObjectID("5d354b5f78eefd5b3cc44bf3")}, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }
  //   console.log(user)
  // })

  // db.collection('users').find({ age: 25 }).toArray((error, users) => {
  //   console.log(users)
  // })

  // db.collection('tasks').findOne({_id: new ObjectID("5d354c7f3018c95b43713dd5")}, (error, task) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }
  //   console.log(task)
  // })

  // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
  //   console.log(tasks)
  // })

  // Insert one user
  // db.collection('users').insertOne({
  //   _id: id,
  //   name: 'Wilson',
  //   age: 25
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }
  //   console.log(result.ops)
  // })



})