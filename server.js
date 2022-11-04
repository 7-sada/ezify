const express = require("express")
const cors = require("cors");
const bodyParser = require("body-parser")
const basicAuth = require('./src/_helpers/basic-auth');
const errorHandler = require('./src/_helpers/error-handler');
const province = require('./src/_helpers/check-province');
require('dotenv').config();

// create express app
const app = express()
// var corsOptions = {
//     origin: "http://localhost:5001"
// };
// app.use(cors(corsOptions));
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// use basic HTTP auth to secure the api
app.use(basicAuth);

// Middleware check province
app.use(province)

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse requests of content-type - application/json
app.use(bodyParser.json())


// define a root route
// app.get('/', (req, res) => {
//     res.json("Hello world")
// })
require('./src/routes/index.routes.js')(app)

// global error handler
app.use(errorHandler);

// setup server port
// const port = process.env.PORT || 5000
// const port = process.env.NODE_ENV === 'production' ? 5000 : 5000;

// listen for requests
app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Server is running  on Port ${port}`);
})