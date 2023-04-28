const express = require('express')

const app = express()
const cors = require('cors')

// ROUTERS
const userRouter = require('./routers/userRouter')

// Parsers
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())

// router adding
app.use('/users', userRouter)

app.listen(3000, () => {
    console.log("AAAAA");
})
