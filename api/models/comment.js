const {Sequelize,DataTypes}=require('sequelize');
const db=require('../config/database');
const { v4: uuidv4 } = require('uuid'); // Import UUID v4 generator


const Comment=db.define('comment',{
    id:{
        // type:DataTypes.STRING(20),
        // validate:{
        //     isAlphanumeric:true,
        //     len:[20,25]
        // },
        // primaryKey:true,
        // allowNull:false
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    userId:{
        // type:DataTypes.STRING(20),
        // validate:{
        //     isAlphanumeric:true,
        //     len:[20,25]
        // },
        // allowNull:false
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
    },
    blogId:{
        // type:DataTypes.STRING(20),
        // validate:{
        //     isAlphanumeric:true,
        //     len:[20,25]
        // },
        // allowNull:false
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
    },
    comment:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    likes:{
        type:DataTypes.ARRAY(DataTypes.STRING),
        allowNull:true
    },
    createdAt:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:DataTypes.NOW
    },
    updatedAt:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:DataTypes.NOW
    }
})

Comment.sync().then(() => {
    console.log('Comment table created');
});

module.exports=Comment;
