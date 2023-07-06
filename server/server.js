const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const dbConn = require('./DbConn/DbConn')

const resumeRoute = require('./routes/ResumeRoute')
//PORT Number
const port = process.env.PORT || 5000

//DB connection
dbConn()

//middleWare
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(express.static(path.join(__dirname, 'public')))

//Middleware Route
app.use('/api', resumeRoute)


// Server Listen
app.listen(port, () => console.log(`Server running on port ${port}`))