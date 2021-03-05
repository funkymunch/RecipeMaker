const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

/**
 * START SERVER
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
