const express=require('express');
const router=express.Router();
const {
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
}=require('../controllers/userControllers');

const {
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin
} = require('../middlewares/verify');

// get user
router.get('/:id',getUser);

// update user
router.put('/:id', verifyTokenAndAuthorization,updateUser);

// delete user
router.delete('/:id',verifyTokenAndAuthorization,deleteUser);

// get all users
router.get('/',verifyTokenAndAdmin,getAllUsers);

// follow a user
router.put('/:id/follow',verifyToken,followUser);

// unfollow a user
router.put('/:id/unfollow',verifyToken,unfollowUser);

// get friends
router.get('/friends/:id',verifyToken,getFriends);

// get followers
router.get('/followers/:id',verifyToken,getFollowers);

// get user's blogs
router.get('/:id/blogs',getUserBlogs);

// get user's profile which will include user's info, blogs, liked blogs, followers, followings
router.get('/profile/:id',getUserProfile);

module.exports=router;
