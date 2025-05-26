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


//Exercise #3
const collectibles = [
    { name: 'shiny ball', price: 5.95 }, // Item 0
    { name: 'autographed picture of a dog', price: 10 }, // Item 1
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 } // Item 2
  ];
  
  app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    
    if (isNaN(index) || index < 0 || index > 2) {
      res.send('This item is not yet in stock. Check back soon!');
    } else {
      const item = collectibles[index];
      res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
    }
  });


  //Exercise #4 
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" }, // Sandal, $50
    { name: "Air Jordans", price: 500, type: "sneaker" }, // Sneaker, $500
    { name: "Air Mahomeses", price: 501, type: "sneaker" }, // Sneaker, $501
    { name: "Utility Boots", price: 20, type: "boot" }, // Boot, $20
    { name: "Velcro Sandals", price: 15, type: "sandal" }, // Sandal, $15
    { name: "Jet Boots", price: 1000, type: "boot" }, // Boot, $1000
    { name: "Fifty-Inch Heels", price: 175, type: "heel" } // Heel, $175
  ];
  
  app.get('/shoes', (req, res) => {
    let filteredShoes = [...shoes];

    const minPrice = parseFloat(req.query['min-price']);
    const maxPrice = parseFloat(req.query['max-price']);
    const type = req.query.type;

    if (minPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    }

    if (maxPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
    }

    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }

    res.send(filteredShoes);
  });


// Listening for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});