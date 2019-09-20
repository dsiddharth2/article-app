const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({    
    articleName: String,
    articleContent: String,
    articleCreatedBy: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);