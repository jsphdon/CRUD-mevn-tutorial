const express = require('express');
const router = express.Router();
const API = require('../controllers/api');
const multer = require('multer');


// Image upload
// multer middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    },
});
let upload = multer({
    storage: storage,
}).single("image");




// fetch all post
router.get('/', API.fetchAllPost);

// fetch post by id
router.get('/:id', API.fetchPostByID);

// create post
router.post('/', upload, API.createPost);

// update post
router.patch('/:id', upload, API.updatePost);

// delete post
router.delete('/:id', API.deletePost);



module.exports = router;