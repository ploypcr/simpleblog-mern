const Post = require('../models/Post')

const CreatePost = async function(data, uid){
    const newPost = new Post({
        title : data.title,
        content : data.content,
        author: uid

    })
    const post = await Post.create(newPost)
    return post
}
const GetAllPosts = async function(){
    const post = await Post.find()
    return post
}
const GetUserPosts = async function(uid){
    const post = await Post.find({ author :uid })

    return post
}
module.exports = { CreatePost, GetAllPosts, GetUserPosts }