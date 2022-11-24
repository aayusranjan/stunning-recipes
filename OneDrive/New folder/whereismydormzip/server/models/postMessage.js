import mongoose from 'mongoose';

// thsi file basecially identify each post have all those things which we will add in schema
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String], 
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;