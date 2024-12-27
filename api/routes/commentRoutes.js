import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment, deleteComment, editComment, getcomments, getPostComment, likeComment } from "../controllers/commentController.js";

const router = express.Router();

router.post('/create',verifyToken, createComment)
router.get('/getPostComments/:postId', getPostComment)
router.get('/getcomments',verifyToken, getcomments)
router.put('/likeComment/:commentId',verifyToken, likeComment)
router.put('/editComment/:commentId',verifyToken, editComment)
router.delete('/deleteComment/:commentId',verifyToken, deleteComment)

export default router;