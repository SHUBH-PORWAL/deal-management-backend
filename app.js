const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorhandler');

const dealRoutes = require('./routes/dealRoutes');
const clientRoutes = require('./routes/clientRoutes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.use('/api/deals', dealRoutes);
app.use('/api/clients', clientRoutes);


app.use(errorHandler);

module.exports = app;
