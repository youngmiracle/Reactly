const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');
const cors = require('cors')

const app = express();

dotenv.config('./.env');

app.use(cors());
app.use(express.json());


app.use('/da', require('./routes/OilRoute'));

app.listen(5000);