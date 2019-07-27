# To-Do-List
Easiest way to plan, organize, and track your work.

See the full API public documentation [here](https://documenter.getpostman.com/view/8214177/SVYjUhyr?version=latest).

---
**Post** Create User

Create a `User` on the To Do List Application.
The response of this request give you the basic information about the `User`. Such as `Token` , `Email` and `Username`. These are automatically stored in the Postman environment for testing.
Note: if the `User` already has an account on To Do List Application, it will not be created.

Body
```
{
	"name": "Gary",
	"email": "garyoldman@gmail.com",
	"password": "blacksirius"
}
```

---

**POST** Login User

Login the `User`

```
localhost:3000/users/login
```

---

**POST** Create task
Create a `Task` on the platform. The `Task` contains a `Description` and a `Flag` indicating whether the task is completed.

Body
```
{
	"description": "Workout",
  "completed": false
}
```

---

**GET** Read tasks
Get every `Task` created by your platform for the given `User`
You can sort the `Task` by created time or the status of being completed.
```
localhost:3000/tasks?sortBy=createdAt:asc
```

**PATCH** Update user
Update a `User` with `Username`, `Email`, `Password` or profile picture.
```
{
	"name": "Tony Stark",
	"password": "hellojavris.",
	"age": "27"
	
}
```

---

**PATCH** Update task
Update the `Task` information(`Description`, `Status`) by id.
```
localhost:3000/tasks/5d37fe01984f6a71499db60f
```

Body
```
{
	"completed": true
}
```

---

**DEL** Delete user
Delete current `User` from the platform. This will delete every `Task` created by this `User`.
```
localhost:3000/users/me
```




