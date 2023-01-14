// allows your app (server) to connect to your db - which will be created by sequelize

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;

// this port is for our db 
//jaws is for when we deploy to heroku
// by using process dotenv and jaws we can keep out credentials safe by not hardcoding them into our file