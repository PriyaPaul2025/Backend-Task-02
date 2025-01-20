const express = require('express');
const app = express();
const port = 3000;

app.get('/products',(req, res) =>{
    console.log(req.query);
    const {category, price} = req.query;

    if(category && price){
        res.send(`Product is ${category} and the price is less than ${price}`);
    }
    else if(category){
        res.send(`Selected product name is ${category}`);
    }
    else if (price){
        res.send(`Price of the selected product is ${price}`);
    }
    else{
        res.send(`All Products`);
    }
});

app.use('*', (req, res) =>{
    console.log('404 error: Route not found');    
    res.status(404).send('404 Error')
});

app.listen(port, ()=>{
    console.log('Welcome to the server');
    
});
