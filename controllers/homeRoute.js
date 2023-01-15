const router = require('express').Router();
const Post = require('..//models/Post');

//Get all posts from db so you can render on homepage existing posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();

    const posts = postData.map((data) => data.get({ plain: true }));

    res.render('home', { posts });
  } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      title,
      body,
    });
    res.render(newPost)
    res.status(200).json(newPost)
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;