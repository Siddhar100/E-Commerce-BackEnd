const express = require('express');
var cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connectToMongo = require('./db');
connectToMongo();

const app = express()
const port = 5000
app.use(express.json());
app.use(cors());

app.use('/api/auth',require('./routes/auth.js'))
app.use('/api/add',require('./routes/Items.js'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})