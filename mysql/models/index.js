const Sequelize = require('sequelize');
const User = require('./users');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';

const config = require('../config/config.json')[env];
const db = {};

sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;
