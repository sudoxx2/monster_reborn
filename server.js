const PORT = process.env.PORT || 3000
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

app.get('/buying-cars', (req, res) => {
    res.render('buying_cars')
})

app.get('/buying-house', (req, res) => {
    res.render('buying_house')
})

app.get('/privacy-policy', (req, res) => {
    res.render('privacy_policy')
})

app.get('/legal-disclaimer', (req, res) => {
    res.render('legal_disclaimer')
})

app.get('/side-hustle', (req, res) => {
    res.render('side_hustle')
})

// Calculator endpoints //

// get base_calc hbs
app.get('/loan-calc', function(req, res) {
    res.render('loan_calc', {layout: 'base_calc.handlebars'});
});

// get auto loan calc hbs
app.get('/auto-loan-calc', function(req, res) {
    res.render('auto_loan_calc', {layout: 'base_calc.handlebars'});
});

// get mortgage loan calc hbs
app.get('/mortgage-loan-calc', function(req, res) {
    res.render('mortgage_loan_calc', {layout: 'base_calc.handlebars'});
});

app.listen(3000, () => {
    console.log('http://localhost:' + PORT)
})