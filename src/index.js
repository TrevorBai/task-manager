const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000   // 1MB
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word document'))
//         }
//         cb(undefined, true)

//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled!')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('The site is under maintenance, please try back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Without middleware: new request -> run route handler
// With middleware: new request -> do something -> run route handler

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () {
//     // console.log(this)
//     return {}
// }

// console.log(JSON.stringify(pet))

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     //console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     //console.log(data)
// }

// myFunction()

// encription algorithm is double ways street, one can encript it back to original string. eg. trevor -> adsfioladflj -> trevor
// hashing algorithm is one way street. one cannot reverse it

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5dc0e86b42e26e187461edc0')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5dc0d64e5735a74110e5759e')
//     await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)
// }

// main()