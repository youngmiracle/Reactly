const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const routers = require('./routes/index');

const app = express();

dotenv.config('./.env');

app.use(cors());
app.use(express.json());


app.use('/api', routers);

app.listen(3500);