const express = require('express');
const app = express();
const mongoose = require('mongoose');
const surveyHandler = require('./controller/pollController');
const bodyParser = require('body-parser')

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/survey', (req, res) => {
    res.render('survey.ejs');
})

app.use('/create', surveyHandler.postASurvey);
app.use('/allpoll', surveyHandler.getAllSurvey);
// app.use('/surveys/:id', surveyHandler.submitASurvey)
// app.use('/showall', surveyHandler);

mongoose.connect('mongodb://localhost:27017/express-survey', () => {
    console.log('db connected succesfully')
});

const port = 3000;

app.listen(port);