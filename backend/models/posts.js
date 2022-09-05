const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: { type: String, require: true },
    userImg: { type: String, require: true },
    text: { type: String, require: true },
    imageUrl: { type: String, require: true },
    likes: { type: Number, require:true,default:0 },
    dislikes: { type: Number, require:true,default:0 },
    usersLiked: { type: Array, require:true },
    usersDisliked: { type: Array,require:true },
});

module.exports = mongoose.model('Posts', postSchema);