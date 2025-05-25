//Below is pure code for copying and pasting to see what is up
//Because I don't have a json for this, this will not work. Just using this to copy and paste for troubleshooting currently.

const express = require('express');

const app = express();

//Exercise #1
app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}! What a delight to see you once more.`);
});

//Exercise #2
app.get('/roll/:number', (req, res) => { 
   
    const number = req.params.number; 
    let validNumber = Number.parseInt(number, 10); 
    
    if (isNaN(validNumber)) { 
        res.send("You must specify a number."); 
    } else {
        let random = Math.floor(Math.random() * (validNumber + 1)); 
        res.send(`You rolled a ${random}.`);
    }
});


// Listening for requests on port 5000
app.listen(5000, () => {
    console.log('Listening on port 5000');
});