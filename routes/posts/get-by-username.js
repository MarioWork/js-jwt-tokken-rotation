const express = require('express');
const router = express.Router();

const authenticateToken = require('../../middleware/authenticate-token');
const postsController = require('../../controllers/posts-controller');

router.get('/', authenticateToken, postsController.getPostsByUsername);

module.exports = router;