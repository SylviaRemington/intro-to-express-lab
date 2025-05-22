// Importing Express
const express = require('express')

// Creating an Express Application/App - This configures to create API
const app = express()

// Defining the routes here:



// Listening for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
})




// EXAMPLE OF DEFINING ROUTES
// app.get('/', (req, res) => { 
//     res.send('<h1>Hello World!</h1>');
//   });