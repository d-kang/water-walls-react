const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = module.exports = express();
app.use(express.static(path.join(__dirname, '../dist')));
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 1234;

app.listen(PORT, () => console.log(`NODE listening on http://localhost:${PORT}`));
