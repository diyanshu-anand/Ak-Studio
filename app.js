const express = require("express");
const path = require("path");
const app = express();
const port = 80;



// Express Specific Stuff
app.use(express.static('static'))
app.use('/static', express.static('static'))
app.use(express.urlencoded())

//pug specific Stuff
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views directory

//Endpoint
app.get('/', (req,res)=>{
    const con = 'This the best content on the internet so far to use it wisely'
    const params = {}
    res.status(200).render('index.pug', params);
})

//Start the server
app.listen(port, ()=>{
    console.log(`The application has been succesfully started in ${port}`);
});