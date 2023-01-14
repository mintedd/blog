const { Post } = require('../models');

const postData = [
{
    title: "0's and 1's",
    body: "Computers operate on what is called a “binary code.” All of the software that runs them is written using only 0’s and 1’s, and there are infinite combinations of these two digits. That’s why new software can be written all the time.",
    time_stamp: "June 22, 2021 09:00:00",
    user_id: 1,
},
{
    title: "RESTful",
    body: "RESTful API is an interface that two computer systems use to exchange information securely over the internet.",
    time_stamp: "September 23, 2021 08:30:00",
    user_id: 2,
},
{
    title: "Express",
    body: "Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js",
    time_stamp: "December 21, 2021 20:30:00",
    user_id: 3,
}
];


const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;