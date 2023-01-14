const { Comment } = require('../models');

const commentData = [
{
    content: "cool",
    post_id: 1,
    user_id: 1,
},
{
    content: "good to know, thanks",
    post_id: 2,
    user_id: 2,
}
];


const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;