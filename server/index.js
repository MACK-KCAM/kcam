const express = require('express');
const router = require('./route');
const DBConnect = require('./dbConfigs');
const cors = require('cors')

// APP IS EXPRESS
const app = express();

// PARSE DATA IN REQUEST BODIES
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

//Needed for File Upload on Multer
app.use(cors())

// PORT DEFINITION
const port = Number(process.env.PORT) || 3000;

// ESTABLISH DATABASE CONNECTION
DBConnect.dbConnection();

// SEND INDEX.HTML ON ROOT REQUEST
app.use(express.static('dist'));
app.get('/', (req, res) => {
    console.log('sending index.html');
    res.sendFile('../client/dist/index.html');
});

// ALL ROUTES RUN THROUGH API
const routes = Object.values(router);
app.use('/api', routes);

app.get('*', (req, res) => {
  console.log('404: Page Not Found');
  res.status(404).send('404: Page Not Found');
}); 

// START THE SERVER
app.listen(port);
console.log(`kcam is awake on port: ${port}`);