const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')

const app = express();

dotenv.config('./.env');

app.use(cors());
app.use(express.json());


app.use('/products', require('./routes/productsRoute'));
app.use('/', require('./routes/authRoute'));

app.listen(5000);