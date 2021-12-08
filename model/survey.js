const { Schema, model } = require('mongoose');

//schema
const surveySchema = new Schema ({
    title : {
        type: String,
        required: true,
        trim: true
    },
    option1 : {
        type: String,
        required: true,
        trim: true,
        default: 0
    },
    option2 : {
        type: String,
        required: true,
        trim: true
    },
    option3 : {
        type: String,
        required: true,
        trim: true
    },
    option4 : {
        type: String,
        required: true,
        trim: true
    }
})

const Survey = model('Survey', surveySchema);

module.exports = Survey;