require('dotenv').config();
const Models=require('../models/index');
const User=Models.User;
const Blog=Models.Blog;
const Comment=Models.Comment;
const { v4: uuidv4 } = require('uuid');
const { Op } = require("sequelize"); 

// Create a Blog
const createBlog=async (req,res)=>{
    const {title,description,blogImage,headline,categories}=req.body;
    if(!title || !description || !blogImage || !headline || !categories){
        return res.status(400).json({msg:"Please fill all fields"});
    }
    try{
        const newBlog=await Blog.create({
            id:uuidv4(),
            title:req.body.title,
            description:req.body.description,
            userId:req.user.id,
            blogImage:req.body.blogImage,
            headline:req.body.headline,
            categories:req.body.categories,
        });
        console.log(newBlog);
        res.status(200).json({msg:"Blog created successfully",newBlog});
    }catch(err){
        res.status(500).json({msg:"Server Error"+err});
    }
}

const addMultipleBlogs = async (req, res) => {
    const blogs = req.body;
    try {
        // Using Promise.all to await all create operations
        const createPromises = blogs.map(async (blog) => {
            return Blog.create({
                id: uuidv4(),
                title: blog.title,
                description: blog.description,
                userId: req.user.id,
                blogImage: blog.blogImage,
                headline: blog.headline,
                categories: blog.categories,
            });
        });
        await Promise.all(createPromises); // Wait for all create operations to finish
        res.status(200).json({ msg: "Blogs created successfully", blogs });
    } catch (error) {
        res.status(500).json({ msg: "Server Error" + error });
    }
};

// get a blog
const getBlog=async (req,res)=>{
    try{
        const blog=await Blog.findOne({where:{id:req.params.id}});
        if(!blog){
            return res.status(400).json({msg:"Blog not found"});
        }
        res.status(200).json({blog});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// update a blog
const updateBlog=async (req,res)=>{
    try{
        const blog=await Blog.findOne({where:{id:req.params.id}});
        if(!blog){
            return res.status(400).json({msg:"Blog not found"});
        }
        await blog.update(req.body);
        res.status(200).json({msg:"Blog updated successfully"});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// delete a blog
const deleteBlog=async (req,res)=>{
    try{
        const blog=await Blog.findOne({where:{id:req.params.id}});
        if(!blog){
            return res.status(400).json({msg:"Blog not found"});
        }
        await blog.destroy();
        res.status(200).json({msg:"Blog deleted successfully"});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// get all blogs of all users also we need usereInfo of each user and need to add pagination and need 
const getAllBlogs=async (req,res)=>{
    try{
        const blogs=await Blog.findAll({order:[['createdAt','DESC']]});
        res.status(200).json({blogs});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// get all blogs of a user
const getAllBlogsOfUser=async (req,res)=>{
    try{
        const blogs=await Blog.findAll({where:{userId:req.params.id}});
        res.status(200).json({blogs});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// get all blogs of a user

// get all comments of a blog
const getAllCommentsOfBlog=async (req,res)=>{
    try{
        const comments=await Comment.findAll({where:{blogId:req.params.id}});
        res.status(200).json({comments});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// search blogs
const searchBlogs=async (req,res)=>{
    try{
        // using partial search
        const blogs=await Blog.findAll({where:{title:{[Op.like]:`%${req.params.title}%`}}});
        res.status(200).json({blogs});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// get all blogs of a category
const getAllBlogsOfCategory=async (req,res)=>{
    try{
        const blogs=await Blog.findAll({where:{categories:{[Op.like]:`%${req.params.category}%`}}});
        res.status(200).json({blogs});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

// // get all the blogs with blogImage where the query="https://example.com/" 
// const getAllBlogsOfImage=async (req,res)=>{
//     try{
//         const blogs=await Blog.findAll({where:{blogImage:{[Op.like]:`%${req.params.id}%`}}});
//         res.status(200).json({blogs});
//     }catch(err){
//         res.status(500).json({msg:err.message});
//     }
// }
const getAllBlogsOfImage = async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            where: {
                blogImage: {
                    [Op.startsWith]: `https://example.com/`
                }
            }
        });
        res.status(200).json({ blogs });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

const deleteBlogsOfImage = async (req, res) => {
    try {
        const deletedRows = await Blog.destroy({
            where: {
                blogImage: {
                    [Op.startsWith]: `https://example.com/`
                }
            }
        });

        if (deletedRows > 0) {
            res.status(200).json({ message: `${deletedRows} blogs deleted successfully.` });
        } else {
            res.status(404).json({ message: 'No blogs found with the specified blog image URL.' });
        }
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};


module.exports={
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
    getAllBlogsOfUser,
    getAllCommentsOfBlog,
    addMultipleBlogs,
    getAllBlogsOfImage,
    deleteBlogsOfImage,
}
