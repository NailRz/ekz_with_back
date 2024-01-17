const Router = require('express')
const router = new Router()

const postController = require('../controller/post.controller')

router.post('/posts', postController.createPost)
router.get('/posts', postController.getPosts)
router.delete('/posts/:id', postController.deletePost)

module.exports = router