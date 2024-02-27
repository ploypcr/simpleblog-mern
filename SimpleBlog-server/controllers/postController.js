const { CreatePost , GetAllPosts, GetUserPosts } = require("../repositories/postRepository")

const CreatePostController = async (req,res) => {
    const token = req.headers.authorization.split(' ')[1]
    try{
        const decoded = jwt.verify(token, process.env.SECRET)
        const post = await CreatePost(req.body, decoded._id)
        res.status(200).json(post)
    }catch (err){
        res.status(400).json({"error": err.message})
        console.log(err)
    }
}

const GetAllPostsController = async (req,res) => {
    //const token = req.headers.authorization.split(' ')[1]
    try{
        const decoded = jwt.verify(token, process.env.SECRET)
        const post = await GetAllPosts()
        res.status(200).json(post)

    }catch (err){
        res.status(400).json({"error": err.message})
        console.log(err)
    }
}

const GetUserPostsController = async (req,res) => {
    const token = req.headers.authorization.split(' ')[1]
    try{
        const decoded = jwt.verify(token, process.env.SECRET)
        const post = await GetUserPosts(decoded._id)
    }catch (err){
        res.status(400).json({"error": err.message})
        console.log(err)
    }
}

module.exports = { CreatePostController, GetAllPostsController, GetUserPostsController }