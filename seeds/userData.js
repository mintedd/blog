const { User } = require('../models');

const userData = [
    {
        username: "Jane Doe",
        email: "janedoe@gmail.com",
        password: "password",
    },
    {
        username: "John Doe",
        email: "johndoe@gmail.com",
        password: "password",
    },
    {
        username: "ironman",
        email: "ironman@gmail.com",
        password: "password",
    },
];


const seedUsers = () => User.bulkCreate(userData);
module.exports = userData;