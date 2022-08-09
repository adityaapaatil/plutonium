const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;
//1.

router.get('/movies', function(req,res) {
    res.send('["Spider Man", "No Time To Die", "The Father", "Dune", "The Suicide Squad"]')
 });
 
 //2.
 router.get('/movies/:moviesid', function(req, res){
     movies = ["Spider Man", "No Time To Die", "The Father", "Dune", "The Suicide Squad"]
     let value = req.params.moviesid;
     if (value > movies.length-1) {
         res.send("doesn't exist")
     }
     else {
         res.send(movies[value])
     }
 })
 
 //3.
 router.get('/films',function(req,res) {
     res.send([ {id: 1, name: 'The Shining'}, {id: 2, name: 'Incendies'}, {id: 3, name: 'Rang de Basanti'}, {id: 4, name: 'Finding Demo'}])
 });
 
 
 //4.
router.get('/films/:filmid',function(req,res) {
     let films = [ {id: 1, name: 'The Shining'}, {id: 2, name: 'Incendies'}, {id: 3, name: 'Rang de Basanti'}, {id: 4, name: 'Finding Demo'}]
     let value =req.params.filmid;
     let found = false;
     for(i=0; i<films.length; i++){
         if (films[i].id==value){
             found=true
             res.send(films[i])
             break;
         }
     }
     if (found == false){
         res.send("No films exists with this id")
     }
    });

 module.exports = router;