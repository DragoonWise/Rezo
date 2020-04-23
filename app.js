const express = require('express');
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
const router = express.Router();
const config = require('./config');
// const tokenList = {};
const app = express();


router.get('/', (req, res) => {
    res.json({
        message: 'API OK'
    })
});

router.use('/auth', require('./routes/auth'));

router.use(require('./middleware/auth'));

// Route Securised
router.use('/customers',require('./routes/customers.js'));




app.use(bodyParser.json())
app.use('/api', router) 

app.listen(config.port || 5000, () => console.log('Server listening on port ' +( config.port || 5000)));