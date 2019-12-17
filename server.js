const express = require("express");
const path = require('path');
const expbs = require('express-handlebars');

const app = express()

//setting up handle bars engine for our templating engine
app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'))

// get home hbs
app.get('/', (req, res) => {
    res.render('index')
})

// get about hbs
app.get('/about', (req, res) => {
    res.render('about')
})

// get base_calc hbs
app.get('/monthly-loan', function(req, res) {
    res.render('monthly_loan_calc', {layout: 'base_calc.handlebars'});
});

app.listen(3000, () => {
    console.log('http://localhost:3000')
})