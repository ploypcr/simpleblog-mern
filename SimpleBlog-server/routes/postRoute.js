const express = require('express');
const router = express.Router();
const { GetAllPostsController, CreatePostController, GetUserPostsController } = require('../controllers/postController');

router.get('/posts', GetAllPostsController);
router.get('/myPosts', GetUserPostsController);

router.post('/posts', CreatePostController);

module.exports = router;