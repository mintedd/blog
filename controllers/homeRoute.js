const router = require('express').Router();
const Post = require('..//models/Post');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
    });

    const posts = postData.map((data) => data.get({ plain: true }));

    res.render('home', { posts });
  } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost)
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;