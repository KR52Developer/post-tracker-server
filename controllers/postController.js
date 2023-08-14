import Post from "../models/Post.js";



export const createPost = (req, res) => {
    new Post(req.body)
        .save()
        .then((post) => res.status(201).json({ success: true, message: "Post created successfully", data: post }))
        .catch((error) => res.status(400).json({ success: false, message: error }));

};
export const getAllPosts = (req, res) => {

    Post.find()
        .then((posts) => res.status(200).json({ sucess: true, posts: posts }))
        .catch((error) => res.status(400).json({ success: false, message: error }));

};
export const getSinglePost = (req, res) => {
    const { id } = req.params;
    Post.findById(id)
        .then((post) => res.status(200).json({ success: true, post: post }))
        .catch((error) => res.status(400).json({ success: false, message: error }));

};
export const updatePost = (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    console.log(newData);
    Post.findByIdAndUpdate(id, {
        username: newData.username,
        description: newData.description,
        duration: newData.duration,
        date: newData.date
    }, { new: true })
        .then((updatedPost) => {
            console.log(updatedPost);
            res.status(200).json({ success: true, message: "Post updated successfully", updatedPost: updatedPost });
        })
        .catch((error) => res.status(400).json({ success: false, message: error }));

};
export const deletePost = (req, res) => {
    const { id } = req.params;
    Post.findByIdAndRemove(id)
        .then((deletedPost) => res.status(200).json({ success: true, message: `Post with ths id:${id} is deleted successfully`, deletedPost: deletedPost }))
        .catch((error) => res.status(400).json({ success: false, message: error }));
};