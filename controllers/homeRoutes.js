const router = require("express").Router();
const { Post, Comment } = require('../models');

//GET all posts for homepage
router.get('/', async (req, res) => {
    try { //try to find all the post in the db
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: Post,
                    attributes: ['filename', 'description'], //??
                },
            ],
        });
        //dbpostdata is the info found in the db, take all that data and then recreate a new array with the new post data recieved
        const posts = dbPostData.map((post) =>
            post.get({ plain: true }) //dont really get this part 
        );
        //now take all the new post and render it to the homepage
        res.render('homepage', {
            posts,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

//get one post at a time so that you can click on it and see comments, make comments, or edit?
router.get('/post/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
                {//kinda confused as to why this is comment
                    model: Comment,
                    attributes: [
                        'id',
                        'content',
                    ]
                }
            ]
        });
        const post = dbPostData.get({ plain: true });
        res.render('post', { post });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;