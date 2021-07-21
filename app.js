const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'client/build')))

app.listen(3000, () => console.log('app.js is running!'));
