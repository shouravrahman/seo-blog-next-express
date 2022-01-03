require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const dbConnect = require('./utils/db')

//routes
const blogRoutes = require('./routes/blog.route')
//app
const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

//cors

if (process.env.NODE_ENV === 'development') {
	app.use(cors({ origin: `${process.env.CLIENT_URL}` }))
}

//db connect
dbConnect()

//routes middleware
app.use('/api', blogRoutes)
// app.use('/users', require('./routes/user-routes'))
// app.use('/upload', require('./routes/uploadImage-route'))

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
