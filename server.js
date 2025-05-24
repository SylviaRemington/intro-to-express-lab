// Importing Express
const express = require('express')

// Creating an Express Application/App - This configures to create API
const app = express()

// Defining the routes here:
//Exercise #1
app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}! What a delight to see you once more.`);
});

//Exercise #2
app.get('/roll/:number', (req, res) => {
    const number = req.params.number;
    if (number isNaN('')) {
        console.log('You must specify a number. Your input is showing invalid.');
    }else {
        const max = 12; //for a set of two dice
        const min = 2; //for a set of two dice
        let rollNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }
});

// Listening for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
})






//CODE GRAVEYARD STUFF -- experiments with code

// EXAMPLE OF DEFINING ROUTES
// app.get('/', (req, res) => { 
//     res.send('<h1>Hello World!</h1>');
//   });

//Exercise #2 -- first try... I know it's incorrect... just figuring it out showing my thought process for myself
// app.get('/roll/:number', (req, res) => {
//     const number = req.params.number;
//     if (number !== number) {
//         console.log('You must specify a number.');
//     }else {
//         const number = req.params.number;
//     }
// });

//Exercise #2 -- second try
// app.get('/roll/:number', (req, res) => {
    // const number = req.params.number;
    // console.log(number);
//     if (number === NaN) {
//         console.log('You must specify a number. Your input is showing invalid.');
//     }else {
//         const number = req.params.number;
//         let rollNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     }
// });

//Exercise #2 -- third try
// app.get('/roll/:number', (req, res) => {
//     const number = req.params.number;
//     if (number isNaN('')) {
//         console.log('You must specify a number. Your input is showing invalid.');
//     }else {
//         const max = 12; //for a set of two dice
//         const min = 2; //for a set of two dice
//         let rollNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     }
// });
//let num=parsint//use pars... look up//
//if number equals string, it's not a number & show error message; 
// if number then show number
//if number is above 12, not valid cause can't have a number over 12, so different msg for that too.

//From Grok X... getting help thinking through code so I do it correctly
// Your current code has the right structure (Express setup, route, and server), but there are issues:
// The isNaN check is incorrect (number isNaN('') isn’t valid syntax).
// You’re using hardcoded min (2) and max (12) for two dice, but the exercise asks for a random number from 0 to the input number (e.g., 0 to 6 for /roll/6).
// You’re logging the error instead of sending it as a response to the client.
// You’re not sending the random roll result back to the client.
// Let’s rethink the solution from scratch, focusing on how to reason through it and create pseudocode to guide your implementation.
