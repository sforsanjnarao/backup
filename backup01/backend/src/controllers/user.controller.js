const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');


module.exports.registerUser=async(req,res)=>{
   const {name,email,password} = req.body;
   
   if(!name ||!email ||!password){
       return res.status(400).json({message: 'All fields are required'});
   }
   const existingUser = await User.findOne({email});
   if(existingUser){
    return res.status(400).json({message: 'Email already exists'});
   }
   const hashedPassword = await bcrypt.hash(password, 10);
   const user = new User({
    name,
    email,
    password:hashedPassword,
   });
   user.save();
   const token = jwt.sign(user.id,"secret");

   res.status(200).json({message: 'user registered',user:user,token}); // send this user to frontend;
}



module.exports.loginUser=async(req,res)=>{
    const {email, password} = req.body;
    console.log(req.body);
    if(!email ||!password){
        return res.status(400).json({message: 'All fields are required'});
    }
    const user = await User.findOne({email});
    console.log(user);

    if(!user){
        return res.status(401).json({message: 'Invalid credentials'});
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        return res.status(401).json({message: 'Invalid credentials'});
    }
    const token = jwt.sign(user.id,"secret");
    res.status(200).json({message: 'Logged in', user:user, token});
}