const express = require('express')

const app = express()
const cors = require('cors')

// Parsers
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// Middleware
app.use('/users', require('./middleware/jsonCheck'))

// ROUTERS
const userRouter = require('./routers/userRouter')

// router adding
app.use('/users', userRouter)

app.listen(3000, () => {
    console.log("AAAAA");
})
