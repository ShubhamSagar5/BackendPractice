const express = require('express')
const router = express.Router()


const {createpost,getAllpost} = require('../controller/createPost')
const {createComment} = require('../controller/createComment')
const {createlike,unlike} = require('../controller/like')


router.post('/createPost',createpost)
router.get('/posts',getAllpost)
router.post('/createComment',createComment)
router.post('/createLike',createlike)
router.post('/unlike',unlike)

module.exports = router