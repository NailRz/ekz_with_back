const express = require('express')
const postRouter = require('./routes/post.routes')
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())

app.use('/api', postRouter)

app.listen(PORT, () => console.log(`serv started on port: ${PORT}`  ))