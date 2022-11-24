import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
const router = express.Router();


router.get("/", getPosts );
// we using other router as controllers bcs it will be more scalabe after we add more routes.
// router.get("/", (req, res) => {
//   res.send("This Works!");
// });
router.post("/", createPost);
router.patch('/:id', updatePost) 
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost);
// we need id to update certian post,patch use for updating exsiting document
export default router;