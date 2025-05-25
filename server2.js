const express = require('express');

const app = express();

//Exercise #1
app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}! What a delight to see you once more.`);
});

//Exercise #2
app.get('/roll/:number', (req, res) => { //setting up the route and getting/capturing the parameter
    // route parameter of :number matches any value in the url segment
    const number = req.params.number; //holds value of parameter and captures parameter as a string
    let validNumber = Number.parseInt(number, 10); //I'm converting a string to a number here (e.g. "6" to 6)
    
    if (isNaN(validNumber)) { // Check if input isn’t a number
        res.send("You must specify a number."); // Send error for /roll/potato
    } else {
        let random = Math.floor(Math.random() * (validNumber + 1)); // Random number 0 to validNumber
        res.send(`You rolled a ${random}.`); // Send result, e.g., "You rolled a 14."
    }
});


// Listening for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});