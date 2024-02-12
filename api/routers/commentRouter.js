const express = require('express');
const router = express.Router();
const {
    createComment,
    getComment,
    updateComment,
    deleteComment,
    getAllCommentOfBlog,
    getAllCommentsOfUser
} = require('../controllers/commentControllers');

const {
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin
} = require('../middlewares/verify');

// create a comment
router.post('/',verifyToken,createComment);

// get a comment
router.get('/:id', getComment);

// update a comment
router.put('/:id',verifyTokenAndAuthorization,updateComment);

// delete a comment
router.delete('/:id',verifyTokenAndAuthorization,deleteComment);

// get all comments of a blog
router.get('/blog/:id', getAllCommentOfBlog);

// get all comments of a user
router.get('/user/:id', getAllCommentsOfUser);

module.exports = router;
