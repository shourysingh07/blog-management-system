const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');
require('dotenv').config();
const Models=require('../models/index');
const User=Models.User;
const { v4: uuidv4 } = require('uuid'); // Import UUID v4 generator

console.log(uuidv4()); 

// register user
const registerUser= async (req,res)=>{
    const {username,email,password,profilePicture,bio}=req.body;
    try{
        if(!username || !email || !password){
            return res.status(400).json({msg:"Please enter required fields"})
        }
        const isExisting=await User.findOne({where:{email:email}});
        if(isExisting){
            return res.status(400).json({msg:"User with this email already exists"});
        }
        const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(password,salt);
        const newUser=await User.create({
            id:uuidv4(),
            username:username,
            email:email,
            password:hash,
            profilePicture:profilePicture,
            bio:bio,
        });
        // save user in postgresSql
        await newUser.save();
        res.status(200).json({msg:"User created successfully"});
    }catch(err){
        res.status(500).json({msg:err});
    }
}

// login user
const loginUser=async (req,res)=>{
    const {email,password}=req.body;
    try{
        if(!email || !password){
            return res.status(400).json({msg:"Please enter required fields"});
        }
        const user=await User.findOne({where:{email:email}});
        if(!user){
            return res.status(400).json({msg:"User with this email does not exist"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:"Invalid credentials"});
        }
        const payload={
            id:user.id,
            username:user.username,
            email:user.email,
            profilePicture:user.profilePicture,
            bio:user.bio,
        };
        // payload is the data that we want to send to the user in the token and the secret key is used to encrypt the payload
        const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"30d"});
        res.status(200).json({token,user});
    }catch(err){
        res.status(500).json({msg:err});
    }
}

module.exports={registerUser,loginUser};
