require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const db=require('./config/database');
const authRouter=require('./routers/authRouter');
const userRouter=require('./routers/userRouter');   
const blogRouter=require('./routers/blogRouter');
const commentRouter=require('./routers/commentRouter');
const PORT = process.env.PORT || 5000;
const cors=require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors('*'));

app.use('/api/users',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/blogs',blogRouter);
app.use('/api/comments',commentRouter);

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
