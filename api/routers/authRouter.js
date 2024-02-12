const express=require('express');
const router=express.Router();
const {
    registerUser,
    loginUser,
}=require('../controllers/authControllers');

// register a user
router.post('/register',registerUser);

// login a user
router.post('/login',loginUser);

module.exports=router;
