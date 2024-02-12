require('dotenv').config();
const Models=require('../models/index');
const User=Models.User;
const Blog=Models.Blog;

// get a user
const getUser=async (req,res)=>{
    try{
        const user=await User.findOne({where:{id:req.params.id}});
        if(!user){
            return res.status(400).json({msg:"User not found"});
        }
        res.status(200).json({user});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// update a user
const updateUser=async (req,res)=>{
    try{
        const user=await User.findOne({where:{id:req.params.id}});
        if(!user){
            return res.status(400).json({msg:"User not found"});
        }
        await user.update(req.body);
        res.status(200).json({msg:"User updated successfully"});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// delete a user
const deleteUser=async (req,res)=>{
    try{
        const user=await User.findOne({where:{id:req.params.id}});
        if(!user){
            return res.status(400).json({msg:"User not found"});
        }
        await user.destroy();
        res.status(200).json({msg:"User deleted successfully"});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// get all users
const getAllUsers=async (req,res)=>{
    try{
        const users=await User.findAll();
        res.status(200).json({users});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// follow a user
const followUser=async (req,res)=>{
    try{
        const user=await User.findOne({where:{id:req.params.id}});
        if(!user){
            return res.status(400).json({msg:"User not found"});
        }
        const currentUser=await User.findOne({where:{id:req.body.userId}});
        if(!currentUser){
            return res.status(400).json({msg:"User not found"});
        }
        if(currentUser.id===user.id){
            return res.status(400).json({msg:"You cannot follow yourself"});
        }
        if(!currentUser.followings.includes(user.id)){
            await currentUser.update({followings:[...currentUser.followings,user.id]});
            await user.update({followers:[...user.followers,currentUser.id]});
            res.status(200).json({msg:"User followed successfully"});
        }else{
            return res.status(400).json({msg:"You are already following this user"});
        }
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// unfollow a user
const unfollowUser=async (req,res)=>{
    try{
        const user=await User.findOne({where:{id:req.params.id}});
        if(!user){
            return res.status(400).json({msg:"User not found"});
        }
        const currentUser=await User.findOne({where:{id:req.body.userId}});
        if(!currentUser){
            return res.status(400).json({msg:"User not found"});
        }
        if(currentUser.id===user.id){
            return res.status(400).json({msg:"You cannot unfollow yourself"});
        }
        if(currentUser.followings.includes(user.id)){
            await currentUser.update({followings:currentUser.followings.filter((id)=>id!==user.id)});
            await user.update({followers:user.followers.filter((id)=>id!==currentUser.id)});
            res.status(200).json({msg:"User unfollowed successfully"});
        }else{
            return res.status(400).json({msg:"You are not following this user"});
        }
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// get friends
const getFriends=async (req,res)=>{
    try{
        const user=await User.findOne({where:{id:req.params.id}});
        if(!user){
            return res.status(400).json({msg:"User not found"});
        }
        const friends=await Promise.all(user.followings.map((friendId)=>User.findOne({where:{id:friendId}})));
        res.status(200).json({friends});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// get followers
const getFollowers=async (req,res)=>{
    try{
        const user=await User.findOne({where:{id:req.params.id}});
        if(!user){
            return res.status(400).json({msg:"User not found"});
        }
        const followers=await Promise.all(user.followers.map((followerId)=>User.findOne({where:{id:followerId}})));
        res.status(200).json({followers});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// get user's blogs
const getUserBlogs=async (req,res)=>{
    try{
        const user=await User.findOne({where:{id:req.params.id}});
        if(!user){
            return res.status(400).json({msg:"User not found"});
        }
        const blogs=await Blog.findAll({where:{userId:user.id}});
        res.status(200).json({blogs});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// get user's profile which will include user's info, blogs, liked blogs, followers, followings
const getUserProfile=async (req,res)=>{
    try{
        const user=await User.findOne({where:{id:req.params.id}});
        if(!user){
            return res.status(400).json({msg:"User not found"});
        }
        const blogs=await Blog.findAll({where:{userId:user.id}});
        const likedBlogs=await Promise.all(user.likedBlogs.map((blogId)=>Blog.findOne({where:{id:blogId}})));
        const followers=await Promise.all(user.followers.map((followerId)=>User.findOne({where:{id:followerId}})));
        const followings=await Promise.all(user.followings.map((followingId)=>User.findOne({where:{id:followingId}})));
        res.status(200).json({user,blogs,likedBlogs,followers,followings});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

module.exports={
    getUser,
    updateUser,
    deleteUser,
    getAllUsers,
    followUser,
    unfollowUser,
    getFriends,
    getFollowers,
    getUserBlogs,
    getUserProfile
}
