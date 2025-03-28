const userModel=require('../models/user.model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const config=require('../config/config')
module.exports.Register=async (req,res)=>{
    const {username, email, password}=req.body;
    if(!username ||!email ||!password) return res.status(400).json({message:'fill the form'})
       try{
        const userExists=userModel.findOne({email:email})
        console.log(userExists)
        if(userExists) return res.status(200).json({message:'user already exists'});
    
            const hashPassword = await bcrypt.hash(password,10);
            const newUser=await userModel.create({
                username,
                email,
                password:hashPassword
            })
            const token = jwt.sign({ _id: newUser._id }, config.JWT_SECRET)
            console.log(newUser, token)
            res.status(200).json({
                message:"user created successfully",
                user:newUser,
                token
            })
        }catch(err){
            console.error(err)
            res.status(500).json({message:'server error'})
        }

    //here you should add validation for username, email and password
    //and then save the user to the database
    //and then send a success message

}

module.exports.login=async (req,res)=>{
    const {email,password}=req.body
    if(!email || !password) return res.status(400).json({message:'fill the form'});

   try{
    const userExists=userModel.findOne({email:email})
    if(!userExists) return res.status(400).json({message:'Register first'})
    if(!userExists.password) return res.status(400).json({message:"passwor is required"})
        const match=await bcrypt.compare(password,userExists.password)
    if(!match) return res.status(400).json({message:"invalid password"})
        const token=jwt.sign({id:userExists.id},config.JWT_SECRET)
    res.status(200).json({
        message:'you are logged in successfully',
        user:userExists,
        token:token
        
    })
   }catch(err){
    console.error(err)
    res.status(500).json({message:'server error'})
   }

}
