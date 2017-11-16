'use strict';

var questions = require('../services/data/questions.json');

exports.RandomQuestion = function 
RandomQuestion(model) {
    const randomQuest = Math.floor(Math.random() * (21-1) + 1); 
    let options = {
        question:{
            
        },
        
        json: true,
        model: model
    }
    return requestPromise(options) 
    .then(function (res) {
          
    })
    
    .catch(function (err) {
        return 'Sorry, there are no questions available at the moment.';
    
    });
};

exports.Question = function 
     getQuestions(model) {
        return questions.questions[0];
};


