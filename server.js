const express = require("express");
const path = require('path');

const app = express()

// app.set('view engine', 'pug');

// app.use(express.static('template'))

// app.use(express.static("template"));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/static/main.css'));
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/template/base.html'));
// })

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/template/base.html');
  });

app.listen(3000, () => {
    console.log('http://localhost:3000')
})