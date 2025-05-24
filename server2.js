const express = require('express')

const app = express()

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

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
