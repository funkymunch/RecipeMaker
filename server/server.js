const path = require('path');
const express = require('express');

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});



app.use('/api', apiRouter)




// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Unknown route!'));

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


/**
 * START SERVER
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
