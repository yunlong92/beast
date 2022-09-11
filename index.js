const express = require('express')
const router = require('./routes/user.js')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8000

app.use("/api/user",router)


app.listen(PORT,console.log(`server listening to ${PORT}`))
