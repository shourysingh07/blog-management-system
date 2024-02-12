const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');
const { v4: uuidv4 } = require('uuid'); // Import UUID v4 generator

const Blog = db.define('blog', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(180),
        allowNull: false,
    },
    headline: {
        type: DataTypes.STRING(350),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    categories: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blogImage: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    likes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    allComments: {
        type: DataTypes.ARRAY(DataTypes.STRING),
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
});

Blog.sync().then(() => {
    console.log('Blog table created');
});

module.exports = Blog;
