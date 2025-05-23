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


// Listening for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
})




// EXAMPLE OF DEFINING ROUTES
// app.get('/', (req, res) => { 
//     res.send('<h1>Hello World!</h1>');
//   });