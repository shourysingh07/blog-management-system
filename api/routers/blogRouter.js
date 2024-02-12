const express = require('express');
const router = express.Router();
const {
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
    getAllBlogsOfUser,
    getAllCommentsOfBlog,
    addMultipleBlogs,
    getAllBlogsOfImage,
    deleteBlogsOfImage
} = require('../controllers/blogControllers');

const {
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin
} = require('../middlewares/verify');

// create a blog
router.post('/add',verifyToken,createBlog);

// get a blog
router.get('/:id', getBlog);

// update a blog
router.put('/:id',verifyToken,updateBlog);

// delete a blog
router.delete('/:id',verifyTokenAndAuthorization,deleteBlog);

// get all blogs
router.get('/', getAllBlogs);

// get all blogs of a user
router.get('/user/:id', getAllBlogsOfUser);

// get all comments of a blog
router.get('/comments/:id', getAllCommentsOfBlog);

// add multiple blogs
router.post('/addMultiple',verifyToken, addMultipleBlogs);


// get all blogs of a specific image
// router.get('/image/:id', getAllBlogsOfImage);

// delete all blogs of a specific image
// router.delete('/delete-blogs/:id', deleteBlogsOfImage);

module.exports = router;
