const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ItemController = require('./dbController')


const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://ziyadelbaz:PYkNVJqtfCs8zDnk@cluster0.bafl3.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('Connected to FunkyMunch Database')
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DB SPECIFIC

app.post('/', ItemController.createItem, (req, res) => {
  res.end()
})

app.get('/', ItemController.findItems)
app.delete('/', ItemController.deleteItemMany)
app.patch('/:id', ItemController.updateItem)



//DB SPECIFIC





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
