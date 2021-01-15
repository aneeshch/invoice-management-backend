const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const fs = require('fs')
const path = require('path')

// read env variables
dotenv.config();

// routes
const userRoutes = require('./routes/users');
const itemRoutes = require('./routes/items');
const invoiceRoutes = require('./routes/invoices');
 
const app = express();
 
// log requests
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}))

// application/json
app.use(bodyParser.json());

const {
  HOST_NAME, DB_PORT_NO, DB_NAME, PORT_NO, VERSION,
} = process.env;

// Enable CORS
app.use(cors());

// routes
app.use(`/api/${VERSION}`, userRoutes);
app.use(`/api/${VERSION}`, itemRoutes);
app.use(`/api/${VERSION}`, invoiceRoutes);

app.use((err, req, res)=>{
    console.log(err);
    res.status(400).json({ message: 'Something went wrong'});
});

// DB connection
mongoose
  .connect(
    `mongodb://${HOST_NAME}:${DB_PORT_NO}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => {
    app.listen(PORT_NO, () => {
      // eslint-disable-next-line no-console
      console.log(`Server listening on port ${PORT_NO}`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });
