const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = "postgres://fyrhoploqtsnca:6ded2a2e3fe5bb6f4aea88121f833d4a6aced58e7b7efa825cd8a21253c79fe8@ec2-107-20-188-239.compute-1.amazonaws.com:5432/dd1l1j9eoigor1?ssl=true";

const app = module.exports = express();
app.use( bodyParser.json() );
app.use( cors() );


app.get('/api/schools', function(req, res){
    console.log('here') 
    let db = app.get('db')
    console.log(db.get_schools)
    db.get_schools().then(results => {
        console.log(results)
        res.status(200).json(results)
    })
})

app.get('/api/Professors', function(req,res){
    let db = app.get('db')
    console.log(db.get_professors)
    db.get_professors().then(results => {
        console.log(results)
        res.status(200).json(results)
    })
})

app.get('/api/SchoolID', function(req,res){
    let db = app.get('db')
    console.log("hellmatt")
    db.get_schoolid([req.query.name]).then(results => {
        console.log(results)
        res.status(200).json(results)
    })
    
})

app.get('/api/ProfessorID', function(req,res){
    let db = app.get('db')
    console.log("hellmatt2")
    db.get_professorid([req.query.name]).then(results => {
        console.log(results)
        res.status(200).json(results)
    })
})

app.get('/api/SchoolComments', function(req,res){
    let db = app.get('db')
    console.log('schoolcomments',req.body, req.query)
    db.get_comments([req.query.id]).then(results => {
        console.log('results',results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
})

app.get('/api/ProfessorComments', function(req,res){
    let db = app.get('db')
    console.log('professorcomments',req.body, req.query)
    db.get_comments2([req.query.id]).then(results => {
        console.log('results',results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
})

app.get('/api/happiness', function(req,res){
    let db = app.get('db')
    console.log('thisisit')
    db.get_happiness([req.query.schoolsid]).then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
})

app.get('/api/reputation', function(req,res){
    let db = app.get('db')
    console.log('thisisit1')
    db.get_reputation([req.query.schoolsid]).then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
})

app.get('/api/locations', function(req,res){
    let db = app.get('db')
    console.log('thisisit3')
    db.get_locations([req.query.schoolsid]).then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
})

app.get('/api/oppurtunities', function(req,res){
    let db = app.get('db')
    console.log('thisisit4')
    db.get_oppurtunities([req.query.schoolsid]).then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
})

app.get('/api/facilities', function(req,res){
    let db = app.get('db')
    console.log('thisisit5')
    db.get_facilities([req.query.schoolsid]).then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
})

app.get('/api/internet', function(req,res){
    let db = app.get('db')
    console.log('thisisit6')
    db.get_internet([req.query.schoolsid]).then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
})

app.get('/api/food', function(req,res){
    let db = app.get('db')
    console.log('thisisit7')
    db.get_food([req.query.schoolsid]).then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
})

app.get('/api/clubs', function(req,res){
    let db = app.get('db')
    console.log('thisisit8')
    db.get_clubs([req.query.schoolsid]).then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
})

app.get('/api/social', function(req,res){
    let db = app.get('db')
    console.log('thisisit9')
    db.get_social([req.query.schoolsid]).then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
})

app.get('/api/safety', function(req,res){
    let db = app.get('db')
    console.log('thisisit1')
    db.get_safety([req.query.schoolsid]).then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
})

app.post('/api/SchoolRating', function(req,res){
    let db = app.get('db')
    console.log(req.body.schoolID)
    let params = [Number(req.body.schoolID), Number(req.body.reputation), Number(req.body.locations), Number(req.body.oppurtunities), req.body.facilities, req.body.internet, Number(req.body.food), Number(req.body.clubs), Number(req.body.social), Number(req.body.happiness), req.body.safety, req.body.gradyear, req.body.mycomment]
    console.log('this is our endpoint' , params)
    db.post_SchoolRating(params).then(() => {
         res.status(200).send('sucess')
    }).catch(err => console.log(err))
})

app.post('/api/ProfessorRating', function(req,res){
    let db = app.get('db')
    let params = [Number(req.body.ProfessorID), req.body.reputation, req.body.takeagain, req.body.forcredit, req.body.textbookuse, req.body.attendance, req.body.hotness, req.body.happiness, req.body.mycomment, req.body.grade]
    console.log('this is our endpoint' , params)
    db.post_ProfessorRating(params).then(() => {
         res.status(200).send('sucess')
    }).catch(err => console.log(err))
})


const port = 3001;

massive( connectionString ).then( db =>{
     app.set ('db', db)
     console.log(db.get_schools) 
     app.listen( port, () => { console.log(`Server listening  port ${port}.`); } );

});


