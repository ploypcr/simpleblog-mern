const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: { 
        type:String,
        required: true,
        unique:true
    },
    content: { 
        type:String,
        required: true
    },
    author : { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'User'
    },
    created_time: { 
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Post', PostSchema)