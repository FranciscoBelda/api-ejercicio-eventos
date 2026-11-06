const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./database');

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 3000);

// MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// ROUTES
app.use('/api/v1/eventos', require('./routes/evento.route'));
app.use('/', (req, res) => res.status(404).json({message: 'API disponible en:',
    url: 'http://localhost:3000/api/v1/eventos'}));

// ARRANCAMOS EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})

