const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const { initializeDbConnection } = require('./database/initializeDbConnection');
const { routeNotFound } = require('./middlewares/routeNotFound');
const signupRouter = require("./routers/signup.router");

//DO NOT MOVE, needs to be at top to establish connection before any functions execute
initializeDbConnection();

app.use("/signup", signupRouter);

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

//DO NOT MOVE, needs to be at the end to catch all routes that are not being handled by server
app.use(routeNotFound);

app.listen(3000, () => {
  console.log('server started');
});