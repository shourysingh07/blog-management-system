const User= require('./user')
const Blog= require('./blog');
const Comment= require('./comment');

// Comment belongs to User and Blog
// Comment.belongsTo(User, {
//     foreignKey: 'userId',  // foreign key is the column name in the Comment table
//     onDelete: 'CASCADE'
// });

// // Comment belongs to User and Blog
// Comment.belongsTo(Blog, {
//     foreignKey: 'blogId',
//     onDelete: 'CASCADE'
// });

// Blog belongs to User
Blog.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

// // define association between User and Blog
User.hasMany(Blog, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

// // define association between User and Comment
// User.hasMany(Comment, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE'
// });

// // define association between Blog and Comment
// Blog.hasMany(Comment, {
//     foreignKey: 'blogId',
//     onDelete: 'CASCADE'
// });

module.exports = { User, Blog, Comment };
// now we have to import this file in server.js instead of importing all the models separately
