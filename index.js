// Import necessary libraries
const express = require('express');
const app = express();
const path = require('path');
const createError=require('http-errors');
// set up database
//const mongoose = require("mongoose");
// Import necessary middlewares
const bodyParser = require('body-parser');

// Import routers 
const indexRouter = require('./server/routes/index.js');

app.use(express.static(path.join(__dirname, './ui')))
// Include middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
    //app.use(cors());
// set up engine
app.set('ui engine', 'ejs');

app.use('/', indexRouter());


// error report middleware
app.use((req, resp,next)=>{
    return next(createError(404,'File not found'));
});
// error handling middleware
// app.use((error,req,resp,next)=>{
//     resp.locals.message=err.message;
//     const status=err.status|| 500;
//     resp.locals.status=status;
//     resp.status(status);
//     resp.render('error.ejs');

// });
const port1 = process.env.port|| 3000;
app.listen(port1,()=>console.log(`listeeeening on port ${port1} ...`));
//const http = require('http');

// Add middleways





















// // Import basic libraries
// const path = require('path');
// const debug = require('debug')('server');

// // Import necessary libraries
// const http = require('http');
// const express = require('express');
// const postsController = require('./server/controllers/candidate_controller')
// //create express app and conect and http server
// const app = express();
// app.use(express.json());
// const server = http.createServer(app);

// // Define server events
// server.on('error', (error) => {
//     debug(`Listen error: ${error.code}`);
// });

// // view engine setup
// app.set('ui', path.join(__dirname, 'ui'));
// app.set('view engine', 'html');
// app.use(express.static('ui'))





// // app.get('/', (req, res)=>{
// //     res.render('/html/index.html');
// // });
// app.post('/api/courses', (req, res)=>{
//    // postsController.registerCandidates();
 
//   //  res.send(['Michel','Solange','Paul']);
//   res.send(req.body.id);
// });

// app.get('/api/courses/:id', (req, res)=>{
//     res.send(req.params.id);
// });

// const port1 = process.env.port|| 3000;
// app.listen(port1,()=>console.log(`listeeeening on port ${port1} ...`));