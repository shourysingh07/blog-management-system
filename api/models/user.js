const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');
const { v4: uuidv4 } = require('uuid'); // Import UUID v4 generator

const User=db.define('user',{
    id: {
        // type: DataTypes.STRING(20),
        // validate: {
        //     isAlphanumeric: true,
        //     len: [20, 25],
        // },
        // primaryKey: true,
        // allowNull: false,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profession: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    coverPicture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    followers: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
    },
    followings: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    bio: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    linkedinUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    websiteUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    skills: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    workAt: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

User.sync().then(() => {
    console.log('User table created');
});

module.exports=User;