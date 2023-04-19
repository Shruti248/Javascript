const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

// Error Handlig Middleware
// app.use((err, req, res, next) => {
//   new Error('Sorry, the requested resource couldn\'t be found');
//   res.status(404);
//   err.statusCode(404);
//   next(err);
// })


// 404 error handling middleware
app.use((req, res, next) => {
  const error = new Error('Sorry, the requested resource couldn\'t be found');
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
