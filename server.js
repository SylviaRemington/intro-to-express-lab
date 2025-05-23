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
    // const number = req.params.number;
    // console.log(number);
    if (number === '') {
        console.log('You must specify a number.');
    }else {
        const number = req.params.number;
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

app.get('/roll/:number', (req, res) => {
    // const number = req.params.number;
    // console.log(number);
    if (number === NaN) {
        console.log('You must specify a number. Your input is showing invalid.');
    }else {
        const number = req.params.number;
        let rollNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }
});