const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
    "mongodb://user:teste123@ds255253.mlab.com:55253/goweek-gstvinf",
    {
        useNewUrlParser: true
    },
);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

// app.get('/', (req, res)=> {
//     return res.send('Hello world');
// });

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log(' xD Server started on port 3000 :)');
}); 



