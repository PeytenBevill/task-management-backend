const express = require('express')
// const tasksRouter = require("./src/routes/R-tasks")
const usersRouter = require("./src/routes/R-users")
const cors = require('cors')


const app = express()
const PORT = process.env.PORT || 5555

app.use(express.json())

app.use(cors())

app.use(function (req, res, next) {
  // Allow requests from localhost and your hosted link
  const allowedOrigins = ['http://localhost:5174', 'https://friendly-pie-465308.netlify.app'];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g., in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to the next layer of middleware
  next();
});

app.use('/', usersRouter)


app.get('/', (req, res) => {
  res.json({
    message: "Welcome to my API!"
  })
})



app.listen(PORT, console.log('connected to the port'))