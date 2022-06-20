const express = require('express');
const app = express();
const useRouter = require('./router/users');

app.use(logger)  // a type o middleware to use it for every route define it at the top
app.use('/users',useRouter)

app.get('/',(req,res)=>{
    console.log('here');
    res.download('server.js')
    res.status(500).json({err: "Hi 500"})
    res.sendStatus(200) // to send the api status code
    res.send("Hola"); // for testing

})
app.get('/org',logger,(req,res)=>{ // add logger individually to a request
    console.log('here');
    res.send("Hola");

})

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000);
