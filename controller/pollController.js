// const express = require('express');
// const router = express.Router();
const Survey = require('../model/survey');

//creating a survey

exports.postASurvey = (req,res) => {
    const newSurvey = new Survey(req.body);
    newSurvey.save(err => {
        if (err) {
            console.log(err)
            res.json({
                err,
                message: 'There was an error'
            })
        } else {
            res.redirect('/allpoll')
        }
    })
}
// exports.postASurvey('/createpoll', (req, res) => {
//     const newSurvey = new Survey(req.body);
//     newSurvey.save(err => {
//         if (err) {
//             console.log(err)
//             res.json({
//                 err,
//                 message: 'There was an error'
//             })
//         } else {
//             // res.redirect('/allbtn')
//         }
//     })
// })

// router.get('/showall', (req, res) => {
//     let surveys = Survey.find()
//     res.render('allSurvey', { surveys })
// })

exports.getAllSurvey = async (req, res, next) => {
    try {
        let surveys = await Survey.find()
        res.render('allSurvey', { surveys })
    } catch (e) {
        console.log(e)
    }
}

exports.submitASurvey = (req, res) => {
    let id = req.params.id;
    console.log(id);
}

// module.exports = router;