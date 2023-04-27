const express = require('express')

const app = express()

// ROUTERS
const userRouter = require('./routers/userRouter')

// Parsers
app.use(express.json())
app.use(express.urlencoded())

// router adding
app.use('/users', userRouter)

app.listen(3000, () => {
    console.log("AAAAA");
})
