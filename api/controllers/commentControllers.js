require('dotenv').config();
const Models=require('../models/index');
const User=Models.User;
const Blog=Models.Blog;
const Comment=Models.Comment;
const { v4: uuidv4 } = require('uuid'); // Import UUID v4 generator

// create a comment
const createComment=async (req,res)=>{
    const {userId,blogId,comment}=req.body;
    try{
        const comment=await Comment.create({
            id:uuidv4(),
            userId,
            blogId,
            comment
        })
        res.status(200).json({comment});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// get a comment
const getComment=async (req,res)=>{
    try{
        const comment=await Comment.findOne({where:{id:req.params.id}});
        if(!comment){
            return res.status(400).json({msg:"Comment not found"});
        }
        res.status(200).json({comment});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// update a comment
const updateComment=async (req,res)=>{
    try{
        const comment=await Comment.findOne({where:{id:req.params.id}});
        if(!comment){
            return res.status(400).json({msg:"Comment not found"});
        }
        await comment.update(req.body);
        res.status(200).json({msg:"Comment updated successfully"});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// delete a comment
const deleteComment=async (req,res)=>{
    try{
        const comment=await Comment.findOne({where:{id:req.params.id}});
        if(!comment){
            return res.status(400).json({msg:"Comment not found"});
        }
        await comment.destroy();
        res.status(200).json({msg:"Comment deleted successfully"});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// get all comments of a blog
const getAllCommentOfBlog=async (req,res)=>{
    try{
        const comments=await Comment.findAll({where:{blogId:req.params.id}});
        res.status(200).json({comments});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// get all comments of a user
const getAllCommentsOfUser=async (req,res)=>{
    try{
        const comments=await Comment.findAll({where:{userId:req.params.id}});
        res.status(200).json({comments});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

module.exports={
    createComment,
    getComment,
    updateComment,
    deleteComment,
    getAllCommentOfBlog,
    getAllCommentsOfUser
}
