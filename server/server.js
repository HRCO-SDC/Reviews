/* eslint-disable no-undef */
const express = require('express');
const app = express();
const PORT = 3333;
const path = require('path');
const cors = require('cors');

app.use(express.static('../client/dist'));

app.use(express.json());
app.use(cors());

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'), err => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });

app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});