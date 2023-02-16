const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const app = express()
const port = 80;

mongoose.connect('mongodb://127.0.0.1:27017/Facebook_Clone', { useNewUrlParser: true, useUnifiedTopology: true });

const SignUp = require('./database/signup');

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/',(req,res)=>{
res.status(200).render("login.pug")
})


app.post('/signup',(req,res)=>{
    const email = req.body.signupemail;
    const cemail = req.body.signupcemail;

    if(email === cemail){
        var mydata = new SignUp(req.body);
        mydata.save().then(() => {
            res.render("home.pug")
        }).catch(() => {
            res.status(200).send("You Entered Invalid Data")
        });
    }
    else{
        res.status(200).send("You Entered Wrong data")

    }
})



app.post('/login',async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const username = await SignUp.findOne({signupemail:email});

        if(username.signuppassword === password){
           res.status(200).render("home.pug")         
        }
        else{
            res.status(200).send("Invalid data")
        }
    }
    catch(error){
     res.status(400).send('Email Not Found')
    }
    
})
app.listen(80,()=>{
    console.log("We are live now..")
})