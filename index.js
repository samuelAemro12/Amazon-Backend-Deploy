const express = require("express");
// a backend framework for Node.js
const cors = require("cors");
// a middleware that enables CORS with various options
const dotenv = require("dotenv");
const { error } = require("console");
const { throwDeprecation } = require("process");
// intsalled to use the .env file
dotenv.config();
// loads environment variables from a .env file into process.env
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
// used stripe to make payments, and the secret key is in the .env file
const app = express();
app.use(cors({origin:true}));

app.use(express.json());

app.get("/", (req,res)=>{
    res.status(200).json({
        message:"Success !",
    });
});
app.post("/payment/create", async(req,res)=>{
    const total = req.query.total;
    if(total>0){
        const paymentIntent = await stripe.paymentIntent.create({
            amount:total, 
            currency:"usd"
        });
        
        res.status(201).json({
            ClientSecret: paymentIntent.client_secret,
        });
    }else{
        res.status(403).json({
            message :"total must be greater than 0",
    });
    }
});

// app.listen(process.env.PORT || 5000, ()=>{
//     console.log(`Server is running on port ${process.env.PORT || 5000}`);
// });

app.listen(5000, (error)=>{
    if(error) throw error;
        console.log(error);
        console.log("Server is running on port 5000");
});