// Importing Express
const express = require('express')

// Creating an Express Application/App - This configures to create API
const app = express()


// Defining the routes here:

// Exercise #1 - works!
app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}! What a delight to see you once more.`);
});


// Exercise #2 - works!
//INFO FOR ME: 
// The app is a game where you “roll a dice” on a website. You pick how many sides the dice has by putting a number in the web address. 
// Like, if you go to website.com/roll/6, you’re saying, “I want a dice with 6 sides.” 
// The app then picks a random number from 0 to 6, like 4, and tells you, “You got a 4.”

// Why the number in the web address? It’s you choosing the dice size. 6 means a 6-sided dice. If you put 10 (website.com/roll/10), you pick a 10-sided dice.
// Why a random number? To make it feel like rolling a real dice. If it just repeated your number, it wouldn’t be a game.
// Writing 6 in the URL (like website.com/roll/6) is me telling the app, “I want a dice with 6 sides.” That’s all it does—it sets the number of sides for the dice the app will “roll” to give you a random number from 0 to 6.

app.get('/roll/:number', (req, res) => { 
    // LINE ABOVE MEANING: What it does: Sets up a web address like example.com/roll/6 where :number can be any value (like 6 or 42).
    // Simple English: Makes the app listen for a web address starting with /roll/ followed by any number or word.

    const number = req.params.number; //it stores the URL's parameter info and grabs it as text
    // LINE ABOVE MEANING: What it does: Grabs the value after /roll/ (like 6 from example.com/roll/6) and stores it as text in a variable called number.
    
    let validNumber = Number.parseInt(number, 10); //I'm converting a string to a number here (e.g. "6" to 6)
    // LINE ABOVE MEANING: What it does: Turns the text in number (like "6") into an actual number (like 6) you can use for math. The 10 means it’s in base-10 (normal numbers).
    // Simple English: Changes the text (like "6") into a real number (like 6).
    
    if (isNaN(validNumber)) { // Check if input isn’t a number
        // Line above meaning: What it does: Checks if validNumber isn’t a number (e.g., if the URL was /roll/potato, parseInt fails and gives NaN, meaning “not a number”).
        res.send("You must specify a number."); // Send error for message (example) /roll/potato
    } else {
        // What it does: If validNumber is a number, it runs the code below.
        let random = Math.floor(Math.random() * (validNumber + 1)); // Random number 0 to validNumber
        res.send(`You rolled a ${random}.`); // Send result, e.g., "You rolled a 14."
    }
});


// Exercise #3 - works!
// This is the shop’s list of items
const collectibles = [
    { name: 'shiny ball', price: 5.95 }, // Item 0
    { name: 'autographed picture of a dog', price: 10 }, // Item 1
    { name: 'vintage 1970s yogurt (Are you sure you want this? May cause food poisoning.) SOLD AS-IS', price: 0.99 } // Item 2
  ];
  
  // When someone visits a web address like yourshop.com/collectibles/0 or http://localhost:3000/collectibles/2
  app.get('/collectibles/:index', (req, res) => {
    // Grab the number from the web address (like "0" or "2")
    const index = parseInt(req.params.index, 10);
    
    // Check if the number works (Checking if it's not 0, 1, or 2, or not a number at all)
    if (isNaN(index) || index < 0 || index > 2) {
      // Tell them we don’t have that item
      res.send('This item is not yet in stock. Check back soon!');
    } else {
      // Pick the item from the list using the number
      const item = collectibles[index];
      // Show them the item’s name and price
      res.send(`You'd like the ${item.name}? You can purchase it for $${item.price}.`);
    }
  });


  //Exercise #4 - corrected code now - works!
  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" }, // Sandal, $50
    { name: "Air Jordans", price: 500, type: "sneaker" }, // Sneaker, $500
    { name: "Air Mahomeses", price: 501, type: "sneaker" }, // Sneaker, $501
    { name: "Utility Boots", price: 20, type: "boot" }, // Boot, $20
    { name: "Velcro Sandals", price: 15, type: "sandal" }, // Sandal, $15
    { name: "Jet Boots", price: 1000, type: "boot" }, // Boot, $1000
    { name: "Fifty-Inch Heels", price: 175, type: "heel" } // Heel, $175
  ];
  
  app.get('/shoes', (req, res) => { //listening for people to visit shoes website and run the code inside
    let filteredShoes = [...shoes]; //new array created by copying the shoes list so don't mess up original list

    const minPrice = parseFloat(req.query['min-price']); //grabs minPrice number that's a string and turns it into a number
    const maxPrice = parseFloat(req.query['max-price']); //grabs maxPrice number that's a string and turns it into a number
    const type = req.query.type; //grabs the “type” (e.g. “sandal”) from the web address.

    if (minPrice) { //check for real number of minPrice
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice); //keeps only shoes in the list that cost the same as or more than minPrice
    }

    if (maxPrice) { //check for real number of maxPrice
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice); //keeps only shoes in the list that cost the same as or less than maxPrice
    }

    if (type) { //check if there’s a type like sandal or sneaker
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type); //keeps only shoes in the list that match the type
    }

    res.send(filteredShoes); //sends response to the client with final list of shoes back to the person who visited the website
  });


// Listening for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});


//Duplicate Error --Commenting out
// Listening for requests on port 3000
// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// });






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

    // If they said type (like type=sandal), keep only shoes that are that type
    // if (type) {
    //     filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    //   }
    
      // Show the shoes that are left after checking all instructions
    //   res.send(filteredShoes);