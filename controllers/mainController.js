const date = require('../getDate.js');
const Wish = require('../models/wish');

/**
 * Yeet
 * @param {import('express').Request} request 
 * @param {import('express').Response} response 
 */
exports.getMainPage =  (request, response)=>{
    let today = date.getDate();
    response.render('index', {dateToRender: today});
}


exports.getDate =(req,res)=>{//req - request , res-response
    let today = date.getDate();
    res.send(today);
}

exports.getWeekday = (req,res)=>{
    let weekday = date.getWeekDay();
    res.send(weekday);
}


exports.postWish = (req,res)=>{
    console.log(req.body.userWish);
    const newWish = new Wish(req.body.userWish);
    newWish.saveWish();

    res.redirect('/');
}