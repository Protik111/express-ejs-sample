const express = require('express');
const router = express.Router();
const Survey = require('../model/survey');

//creating a survey
router.post('/createpoll', (req, res) => {
    const newSurvey = new Survey(req.body);
    newSurvey.save(err => {
        if (err) {
            console.log(err)
            res.json({
                err,
                message: 'There was an error'
            })
        } else {
            // res.redirect('/allbtn')
        }
    })
})

// router.get('/showall', (req, res) => {
//     let surveys = Survey.find()
//     res.render('allSurvey', { surveys })
// })

// exports.getAllPolls = async (req, res, next) => {
//     try {
//         let polls = await Survey.find()
//         res.render('polls', {polls})
//     } catch (e) {
//         console.log(e)
//     }
// }

module.exports = router;