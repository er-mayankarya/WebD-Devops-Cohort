const { Router } = require("express");

const courseRouter = Router();

//Course End-Points 

courseRouter.post('/purchase' , (req ,res) => {

});

courseRouter.get("'/preview" , (req , res) => {

});

module.exports = {
    courseRouter : courseRouter    
}