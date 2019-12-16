const express = require("express");
const path = require('path');
const expbs = require('express-handlebars');

const app = express()

app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');



// app.set('view engine', 'pug');

// app.use(express.static('template'))

// app.use(express.static("template"));

app.get('/', (req, res) => {
    res.render('index')
})

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/template/base.html'));
// })

// app.get('/',function(req,res) {
//     res.sendFile(__dirname + '/template/base.html');
//   });

app.listen(3000, () => {
    console.log('http://localhost:3000')
})