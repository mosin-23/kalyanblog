const express = require("express");
const { createBlog, deleteBlog, updateBlogField, viewBlogs, viewBlogById ,viewBlogsLatest,createUser,getAllUsers,viewUserById, verifyUser} = require("../controller/BlogPost");
const router = express.Router();

// POST route to create a blog
router.post("/addblog", createBlog);

router.post("/adduser",createUser);

router.post('/auth/verify',verifyUser)

// DELETE route to delete a blog by ID
router.delete("/:id", deleteBlog);

router.get("/blogs", viewBlogs);

router.get('/blogslatest',viewBlogsLatest);

router.get('/users',getAllUsers)

router.get('/user/:id',viewUserById)

router.get("/:id",viewBlogById);

// PATCH route to update specific fields of a blog by ID
router.patch("/:id", updateBlogField);

module.exports = router;
