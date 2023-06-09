const express = require('express');
require('express-async-errors');
const path = require('path')
const loggerMiddleware = require('./middleware/loggerMiddleware')
const resourceNotFoundMiddleware = require('./middleware/resourceNotFoundMIddleware')
const errorHandlerMiddleware = require('./middleware/errorHanderMiddleware')
require('dotenv').config();

const router = require('./routes/dogs')
const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use('/dogs' , router);

// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!")
});

app.use('/static',express.static('assets'))
app.use(resourceNotFoundMiddleware);
app.use(errorHandlerMiddleware)


app.listen(process.env.PORT, () => console.log('Server is listening on port', process.env.PORT));
