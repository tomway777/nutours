const express = require('express');
const morgan = require('morgan');

const touRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// midleware
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('hello from the middleware .😊😊😊');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// routes
app.use('/api/v1/tours', touRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
