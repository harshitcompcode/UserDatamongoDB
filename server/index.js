const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require("./models/users");


const cors = require('cors');


app.use(express.json());
app.use(cors());  


mongoose.connect("mongodb+srv://MernIn60:MernIn60@cluster0.d7nlsip.mongodb.net/merntutorial?retryWrites=true&w=majority");


app.get("/getUsers", (req,res) => {
    UserModel.find().then((err,result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});


app.post("/createUser", async(req,res)=>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    
    res.json(user);
});




app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});
